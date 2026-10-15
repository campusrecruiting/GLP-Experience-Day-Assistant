// PMG Experience Day Assistant — Client-Side Application Logic

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

  // Stop words to ignore during query tokenization
  const STOP_WORDS = new Set([
    'a', 'about', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'could',
    'do', 'does', 'for', 'from', 'get', 'had', 'has', 'have', 'how', 'i',
    'if', 'in', 'is', 'it', 'me', 'my', 'no', 'not', 'of', 'on', 'or', 'our',
    'please', 'should', 'so', 'that', 'the', 'their', 'there', 'they', 'this',
    'to', 'us', 'was', 'we', 'what', 'when', 'where', 'which', 'who', 'will',
    'with', 'would', 'you', 'your'
  ]);

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

  // Find best matching FAQ item
  function findAnswer(query) {
    const data = (typeof window !== 'undefined' && window.FAQ_DATA) || (typeof FAQ_DATA !== 'undefined' ? FAQ_DATA : []);
    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    const cleanQuery = normalizeText(query);
    const tokens = getTokens(query);

    // Topic direct match (e.g. from suggestion buttons or exact keyword)
    for (const item of data) {
      if (item.id === query.toLowerCase() || item.topics.includes(query.toLowerCase()) || cleanQuery === item.id) {
        return item;
      }
    }

    let bestItem = null;
    let highestScore = 0;

    for (const item of data) {
      let score = 0;
      const cleanQuestion = normalizeText(item.question);
      const cleanAnswer = normalizeText(item.answer);
      const cleanTitle = normalizeText(item.shortTitle);

      // 1. Exact phrase boost
      if (cleanQuestion.includes(cleanQuery) || cleanQuery.includes(item.id)) {
        score += 50;
      }

      // 2. Query token matching
      for (const token of tokens) {
        // Direct topic match
        if (item.topics.some(t => t === token || t.includes(token))) {
          score += 15;
        }
        // Short title match
        if (cleanTitle.includes(token)) {
          score += 12;
        }
        // Question title match
        if (cleanQuestion.includes(token)) {
          score += 8;
        }
        // Answer body match
        if (cleanAnswer.includes(token)) {
          score += 2;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestItem = item;
      }
    }

    // Require a minimum match threshold
    if (highestScore >= 8) {
      return bestItem;
    }

    return null;
  }

  // Format text with markdown links and line breaks
  function formatResponse(text, source) {
    // Escape HTML first
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Linkify email addresses
    escaped = escaped.replace(
      /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
      '<a href="mailto:$1">$1</a>'
    );

    // Format bullet points and newlines
    const lines = escaped.split('\n');
    let html = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('• ') || line.startsWith('- ')) {
        html += `<div style="padding-left:12px;margin:3px 0;">${line}</div>`;
      } else if (line.trim() === '') {
        html += '<div style="height:8px;"></div>';
      } else {
        html += `<div>${line}</div>`;
      }
    }

    if (source) {
      html += `<div class="answer-source">${source}</div>`;
    }

    return html;
  }

  function appendMessage(text, isUser = false, source = null) {
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
      bubbleEl.innerHTML = formatResponse(text, source);
    }

    messageEl.appendChild(tagEl);
    messageEl.appendChild(bubbleEl);
    messagesContainer.appendChild(messageEl);

    // Scroll smoothly to bottom
    messagesContainer.scrollTo({
      top: messagesContainer.scrollHeight,
      behavior: 'smooth'
    });
  }

  function handleQuestion(userText, topicKey = null) {
    const trimmed = userText.trim();
    if (!trimmed) return;

    // Append user bubble
    appendMessage(trimmed, true);

    // Find answer (check topicKey first if provided)
    const match = (topicKey && findAnswer(topicKey)) || findAnswer(trimmed);

    // Small simulated delay for natural conversational feel
    setTimeout(() => {
      if (match) {
        appendMessage(match.answer, false, match.source);
      } else {
        const fallbackText = "I don't have exact details on that specific question yet! I specialize in Experience Day logistics like booking flights, hotel arrangements, dress code, parking/driving, and the schedule.\n\nFor personal arrangements or questions about your interview status, feel free to reach out to our team at campusrecruiting@pmg.com.";
        appendMessage(fallbackText, false, 'GLP Experience Day FAQ • Candidate Support');
      }
    }, 280);
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

    // Auto-grow textarea & Enter key submission (Shift+Enter for newline)
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

  // Handle suggestion topic pills
  if (suggestionsContainer) {
    suggestionsContainer.addEventListener('click', function (e) {
      const button = e.target.closest('button[data-topic]');
      if (!button) return;
      const topic = button.getAttribute('data-topic');
      const label = button.textContent.replace(/^[^\w\s]+/, '').trim();
      handleQuestion(label, topic);
    });
  }

  // Reset chat
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
