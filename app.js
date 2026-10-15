// PMG Experience Day Assistant — Intelligent Client-Side Application Logic

(function () {
  'use strict';

  const messagesContainer = document.getElementById('messages');
  const chatForm = document.getElementById('chat-form');
  const questionInput = document.getElementById('question');
  const suggestionsContainer = document.getElementById('suggestions');
  const resetButton = document.getElementById('reset');

  const INITIAL_MESSAGE_HTML = `
    <div class="message bot">
      <span class="message-tag">PMG ASSISTANT</span>
      <div class="bubble">Hi there! Excited for Experience Day? Ask me about travel, what to wear, what to bring, or what the day looks like.</div>
    </div>
  `;

  // Common stop words to exclude from score weighting
  const STOP_WORDS = new Set([
    'a', 'about', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'could',
    'do', 'does', 'for', 'from', 'get', 'had', 'has', 'have', 'how', 'i',
    'if', 'in', 'is', 'it', 'me', 'my', 'no', 'not', 'of', 'on', 'or', 'our',
    'please', 'should', 'so', 'that', 'the', 'their', 'there', 'they', 'this',
    'to', 'us', 'was', 'we', 'what', 'when', 'where', 'which', 'who', 'will',
    'with', 'would', 'you', 'your', 'experience', 'day', 'pmg'
  ]);

  // Generic verbs that should not trigger false positive matches on their own
  const GENERIC_VERBS = new Set([
    'bring', 'bringing', 'take', 'taking', 'need', 'needed', 'get', 'getting',
    'stay', 'staying', 'come', 'coming', 'go', 'going', 'have', 'having',
    'use', 'using', 'know', 'make', 'give', 'ask', 'tell', 'want'
  ]);

  // Conversational Intent Synonyms
  const GREETING_TOKENS = new Set(['hi', 'hello', 'hey', 'howdy', 'greetings', 'morning', 'afternoon']);
  const THANKS_TOKENS = new Set(['thanks', 'thank', 'appreciate', 'helpful', 'awesome', 'great', 'cool']);

  // Domain Synonym Expansion
  const SYNONYMS = {
    'flight': ['flights', 'plane', 'airplane', 'airline', 'airfare', 'navan', 'dfw', 'dal', 'love field', 'airport', 'fly'],
    'hotel': ['lodging', 'room', 'accommodations', 'stay', 'checkout', 'sleep', 'night'],
    'clothes': ['clothing', 'dress', 'wear', 'outfit', 'attire', 'shoes', 'suit', 'tie', 'casual', 'jacket', 'sweater'],
    'schedule': ['agenda', 'timing', 'time', 'hours', 'start', 'end', 'conclude', 'finish', 'timeline'],
    'driving': ['drive', 'car', 'parking', 'park', 'garage', 'mileage', 'gas', 'reimbursement', 'ramp'],
    'food': ['meals', 'meal', 'lunch', 'breakfast', 'dinner', 'catered', 'catering', 'dietary', 'allergies', 'eat'],
    'laptop': ['computer', 'mac', 'pc', 'charger', 'loaner', 'borrow'],
    'survey': ['form', 'slides', 'presentation', 'behavioral', 'intro'],
    'offers': ['decision', 'decisions', 'hear', 'offer', 'timeline', 'results', 'hire'],
    'address': ['location', 'directions', 'building', 'office', 'olive', 'where is pmg', 'where is the office']
  };

  function normalizeText(text) {
    return (text || '')
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getTokens(text) {
    const normalized = normalizeText(text);
    return normalized
      .split(' ')
      .filter(t => t.length > 1 && !STOP_WORDS.has(t));
  }

  // Build corpus vocabulary set from all FAQ content
  function getCorpusVocabulary(data) {
    const vocab = new Set();
    for (const item of data) {
      const allText = `${item.id} ${item.shortTitle} ${item.question} ${item.answer} ${(item.topics || []).join(' ')} ${(item.sampleQuestions || []).join(' ')}`;
      const words = normalizeText(allText).split(' ');
      for (const w of words) {
        if (w.length > 2) vocab.add(w);
      }
    }
    return vocab;
  }

  // Expand query tokens using domain synonyms
  function expandTokens(tokens) {
    const expanded = new Set(tokens);
    for (const token of tokens) {
      for (const [key, synList] of Object.entries(SYNONYMS)) {
        if (key === token || synList.includes(token)) {
          expanded.add(key);
          synList.forEach(s => expanded.add(s));
        }
      }
    }
    return Array.from(expanded);
  }

  // Levenshtein distance for typo tolerance
  function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }

  function isFuzzyMatch(word1, word2) {
    if (word1 === word2) return true;
    if (word1.length > 4 && word2.length > 4) {
      return levenshteinDistance(word1, word2) <= 1;
    }
    return false;
  }

  function scoreFAQ(item, cleanQuery, tokens, expanded) {
    let score = 0;
    const cleanQuestion = normalizeText(item.question);
    const cleanAnswer = normalizeText(item.answer);
    const cleanTitle = normalizeText(item.shortTitle);

    // Exact phrase in question or title
    if (cleanQuestion.includes(cleanQuery)) score += 60;
    if (cleanTitle.includes(cleanQuery)) score += 40;

    // Direct topic or ID matches
    if (item.id === cleanQuery) score += 70;
    if (item.topics.some(t => t === cleanQuery)) score += 50;

    // Check sample questions
    if (item.sampleQuestions) {
      for (const sq of item.sampleQuestions) {
        const cleanSq = normalizeText(sq);
        if (cleanSq.includes(cleanQuery) || cleanQuery.includes(cleanSq)) {
          score += 45;
        }
      }
    }

    // Token & expanded synonym matching
    for (const token of tokens) {
      const isGeneric = GENERIC_VERBS.has(token);
      const weightMultiplier = isGeneric ? 0.35 : 1.0;

      if (item.topics.some(t => t === token || isFuzzyMatch(t, token))) {
        score += 20 * weightMultiplier;
      }
      if (cleanTitle.includes(token)) score += 14 * weightMultiplier;
      if (cleanQuestion.includes(token)) score += 10 * weightMultiplier;
      if (cleanAnswer.includes(token)) score += 2 * weightMultiplier;
    }

    // Extra weight for expanded domain synonyms
    for (const exp of expanded) {
      if (!GENERIC_VERBS.has(exp) && item.topics.includes(exp)) {
        score += 8;
      }
    }

    return score;
  }

  // Intelligent matching engine supporting compound questions
  function findAnswers(query, topicKey = null) {
    const data = (typeof window !== 'undefined' && window.FAQ_DATA) || (typeof FAQ_DATA !== 'undefined' ? FAQ_DATA : []);
    if (!Array.isArray(data) || data.length === 0) return { matches: [], intent: 'none' };

    // Direct topic lookup (from button click)
    if (topicKey) {
      const direct = data.find(item => item.id === topicKey);
      if (direct) return { matches: [direct], intent: 'faq' };
    }

    const cleanQuery = normalizeText(query);
    const tokens = getTokens(query);

    // Detect Greeting Intent
    if (tokens.length <= 3 && tokens.some(t => GREETING_TOKENS.has(t))) {
      return { matches: [], intent: 'greeting' };
    }

    // Detect Thank You Intent
    if (tokens.length <= 4 && tokens.some(t => THANKS_TOKENS.has(t))) {
      return { matches: [], intent: 'thanks' };
    }

    if (tokens.length === 0) {
      return { matches: [], intent: 'unknown' };
    }

    // Check for substantive out-of-domain terms
    const vocab = getCorpusVocabulary(data);
    const unknownSpecificTokens = tokens.filter(
      t => !GENERIC_VERBS.has(t) && !vocab.has(t) && !Array.from(vocab).some(v => isFuzzyMatch(v, t))
    );

    const expanded = expandTokens(tokens);

    // Score all items
    const scored = data.map(item => ({
      item,
      score: scoreFAQ(item, cleanQuery, tokens, expanded)
    }));

    // Sort descending by score
    scored.sort((a, b) => b.score - a.score);

    const top = scored[0];

    // If query has unknown specific subjects (e.g. dog, pet, salary, roommate)
    // require an unambiguous, high-scoring specific subject match
    const minThreshold = unknownSpecificTokens.length > 0 ? 32 : 16;

    if (!top || top.score < minThreshold) {
      return { matches: [], intent: 'unknown' };
    }

    // Check if query is compound (e.g. "what should I wear AND what is the schedule?")
    const matches = [top.item];
    const second = scored[1];
    const hasAnd = query.toLowerCase().includes(' and ') || query.includes('&') || query.includes(' also ');

    if (hasAnd && second && second.score >= 22 && (top.score - second.score) < 30) {
      matches.push(second.item);
    }

    return { matches, intent: 'faq' };
  }

  // Format response with markdown bolding, bullets, and emails
  function formatResponse(text, source, relatedItems = []) {
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Markdown bold: **text**
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Linkify email addresses
    html = html.replace(
      /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
      '<a href="mailto:$1">$1</a>'
    );

    // Format bullet points and paragraphs
    const lines = html.split('\n');
    let formatted = '';
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
        formatted += `<div style="padding-left:14px;margin:5px 0;">${trimmed}</div>`;
      } else if (trimmed === '') {
        formatted += '<div style="height:10px;"></div>';
      } else {
        formatted += `<div>${trimmed}</div>`;
      }
    }

    if (source) {
      formatted += `<div class="answer-source">${source}</div>`;
    }

    // Add related topic chips if available
    if (relatedItems && relatedItems.length > 0) {
      formatted += '<div style="margin-top:14px;padding-top:10px;border-top:1px solid #d4e5e2;font-size:11px;color:#496d67;"><strong>Related questions:</strong><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:7px;">';
      for (const rel of relatedItems) {
        formatted += `<button class="inline-chip" data-topic="${rel.id}" style="font:500 11px 'DM Sans',Arial,sans-serif;background:#fff;border:1px solid #9dc4bf;border-radius:14px;padding:4px 9px;color:#1d6670;cursor:pointer;">${rel.shortTitle} ↗</button>`;
      }
      formatted += '</div></div>';
    }

    return formatted;
  }

  function appendMessage(text, isUser = false, source = null, relatedItems = []) {
    const messageEl = document.createElement('div');
    messageEl.className = `message ${isUser ? 'user' : 'bot'}`;

    const tagEl = document.createElement('span');
    tagEl.className = 'message-tag';
    tagEl.textContent = isUser ? 'YOU' : 'PMG ASSISTANT';

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'bubble';

    if (isUser) {
      bubbleEl.textContent = text;
    } else {
      bubbleEl.innerHTML = formatResponse(text, source, relatedItems);
    }

    messageEl.appendChild(tagEl);
    messageEl.appendChild(bubbleEl);
    messagesContainer.appendChild(messageEl);

    // Smooth scroll to latest
    messagesContainer.scrollTo({
      top: messagesContainer.scrollHeight,
      behavior: 'smooth'
    });
  }

  function handleQuestion(userText, topicKey = null) {
    const trimmed = userText.trim();
    if (!trimmed) return;

    appendMessage(trimmed, true);

    const { matches, intent } = findAnswers(trimmed, topicKey);

    setTimeout(() => {
      if (intent === 'greeting') {
        appendMessage(
          "Hello! Great to connect with you. I'm here to answer any questions about PMG Experience Day—including travel, hotel reservations, the dress code, parking, and our schedule!\n\nWhat would you like to know?",
          false,
          'GLP Experience Day FAQ • Welcome'
        );
      } else if (intent === 'thanks') {
        appendMessage(
          "You're very welcome! We are so excited to host you at PMG. If you think of anything else before Experience Day, don't hesitate to ask or reach out to campusrecruiting@pmg.com.",
          false,
          'GLP Experience Day FAQ • Candidate Support'
        );
      } else if (matches.length > 0) {
        const allData = window.FAQ_DATA || [];
        
        matches.forEach((match, idx) => {
          // Resolve related items
          const related = (match.relatedIds || [])
            .map(id => allData.find(d => d.id === id))
            .filter(Boolean)
            .slice(0, 3);

          appendMessage(match.answer, false, match.source, idx === matches.length - 1 ? related : []);
        });
      } else {
        const fallbackText = "I'm not sure about that! Please email campusrecruiting@pmg.com, send a message in the GroupMe channel, or reach out to your recruiter directly so we can assist you!";
        appendMessage(fallbackText, false, 'GLP Experience Day FAQ • Candidate Support');
      }
    }, 250);
  }

  // Handle form submission
  if (chatForm && questionInput) {
    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const text = questionInput.value;
      questionInput.value = '';
      questionInput.style.height = 'auto';
      handleQuestion(text);
    });

    // Enter key submits (Shift+Enter for newline)
    questionInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        chatForm.dispatchEvent(new Event('submit', { cancelable: true }));
      }
    });

    questionInput.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 80) + 'px';
    });
  }

  // Handle suggestion pills & dynamic related question chips
  document.addEventListener('click', function (e) {
    const button = e.target.closest('button[data-topic]');
    if (!button) return;
    const topic = button.getAttribute('data-topic');
    const label = button.textContent.replace(/[↗✈⌂✧◷]+/g, '').trim();
    handleQuestion(label, topic);
  });

  // Reset conversation
  if (resetButton) {
    resetButton.addEventListener('click', function () {
      messagesContainer.innerHTML = INITIAL_MESSAGE_HTML;
      if (questionInput) {
        questionInput.value = '';
        questionInput.style.height = 'auto';
        questionInput.focus();
      }
    });
  }
})();
