// PMG Graduate Leadership Program (GLP) Experience Day Knowledge Base
// Source: GLP Experience Day FAQ’s Official Google Doc

var FAQ_DATA = [
  {
    id: "flights",
    shortTitle: "Booking Flights",
    topics: [
      "flight", "flights", "navan", "airport", "plane", "airplane", "airfare",
      "airline", "airlines", "booking", "book", "fly", "flying", "dfw", "love field", "dal",
      "dallas airport", "arriving", "arrive", "depart", "departure", "return flight",
      "sunday", "weekend", "stay the weekend", "ticket", "tickets"
    ],
    relatedIds: ["hotel", "transportation", "costs"],
    sampleQuestions: [
      "How do I book my flight?",
      "Can I fly into Love Field or DFW?",
      "What time should I arrive in Dallas?",
      "Can I stay in Dallas for the weekend?",
      "Does PMG cover my Sunday flight?"
    ],
    question: "How do I book my flight?",
    answer: "You will receive an email from the **Navan** travel platform after speaking with your recruiter and confirming your Experience Day date.\n\n• **Airlines & Airports**: You may select any airline that fits your schedule, flying into either Dallas Love Field (DAL) or Dallas Fort Worth (DFW).\n• **Arrival & Departure Times**: We recommend arriving in Dallas Thursday afternoon or early evening. Plan your departure flight for Friday after 6:00 PM to ensure you have plenty of time to reach the airport after interviews wrap up at 3:00 PM.\n• **Weekend Stay in Dallas**: You are welcome to stay the weekend! Your return flight is fully covered through Sunday (you will just need to book and pay for your own hotel accommodations for Friday and Saturday nights).\n\nIf you plan to stay past Friday or need special flight changes, reach out to campusrecruiting@pmg.com.",
    source: "GLP Experience Day FAQ • Question 1 (Flights & Travel)"
  },
  {
    id: "hotel",
    shortTitle: "Hotel Details",
    topics: [
      "hotel", "room", "rooms", "stay", "staying", "lodging", "accommodations",
      "book hotel", "room block", "checkout", "check-out", "luggage", "bags",
      "suitcase", "pack", "thursday night", "friday morning", "local hotel",
      "sleep", "where do i stay"
    ],
    relatedIds: ["flights", "driving", "transportation"],
    sampleQuestions: [
      "Do I need to book a hotel?",
      "Where is the hotel located?",
      "What do I do with my luggage on Friday?",
      "Can local candidates stay in the hotel?",
      "Is hotel covered for the weekend?"
    ],
    question: "Do I need to book a hotel?",
    answer: "We have a hotel room block reserved, and our recruiting team will automatically add your name to it.\n\n• **Location**: The hotel is very close to the PMG Dallas office. We will share the exact hotel address the week of your Experience Day.\n• **Thursday Night Covered**: The room block covers Thursday night with checkout on Friday morning.\n• **Luggage Storage**: You can bring your luggage directly to the office Friday morning. We have a secure designated area to store your bags throughout your interview day.\n• **Local Candidates**: Candidates living in the DFW area are also welcome to stay at the hotel Thursday night to avoid Friday morning traffic!\n• **Weekend Stays**: If you choose to extend your trip through Sunday, you will need to arrange and cover your own hotel for Friday and Saturday.",
    source: "GLP Experience Day FAQ • Question 2 (Hotel & Lodging)"
  },
  {
    id: "driving",
    shortTitle: "Driving & Parking",
    topics: [
      "drive", "driving", "drove", "car", "parking", "park", "garage", "local",
      "visitor", "5th floor", "happiest hour", "ticket", "validate", "validation",
      "mileage", "gas", "ramp", "reimburse", "reimbursement", "dfw local"
    ],
    relatedIds: ["hotel", "transportation", "costs"],
    sampleQuestions: [
      "Where do I park when I arrive at PMG?",
      "How do I validate my parking ticket?",
      "Do I get reimbursed for gas and mileage?",
      "What GPS address should I use for parking?"
    ],
    question: "What if I’m driving or a local candidate?",
    answer: "If you are driving to Experience Day:\n\n• **Parking Location**: Park in a PMG visitor spot on the **5th floor** of our parking garage.\n• **GPS Tip**: Enter **Happiest Hour** into your GPS—it navigates straight to the garage entrance on the right side of the building.\n• **Parking Validation**: Make sure to bring your paper parking ticket from the garage gate into the office so our team can validate it for you!\n• **Mileage & Gas Reimbursement**: Keep track of your roundtrip mileage and keep any gas receipts. We will invite you to a Ramp account to submit for full reimbursement after Experience Day.",
    source: "GLP Experience Day FAQ • Question 3 (Driving & Parking)"
  },
  {
    id: "transportation",
    topics: [
      "uber", "voucher", "rideshare", "ride", "rides", "taxi", "cab", "transport",
      "transportation", "getting around", "ground travel", "lyft", "code", "claim code"
    ],
    shortTitle: "Uber Voucher & Ground Travel",
    relatedIds: ["flights", "hotel", "costs"],
    sampleQuestions: [
      "How do I get an Uber voucher?",
      "How many rides are included in the Uber voucher?",
      "Does PMG cover transport to and from my home airport?",
      "How do I travel between the hotel and office?"
    ],
    question: "How do I get around Dallas if I’m not driving?",
    answer: "We provide an official **Uber voucher with 7 rides included** for your trip!\n\n• **What It Covers**: Rides between your home and local airport, Dallas airports to hotel/office, commutes between the hotel and PMG office, and heading out for dinner Thursday evening.\n• **How to Access**: You will receive an email containing a direct claim code that loads the voucher into your mobile Uber app.",
    source: "GLP Experience Day FAQ • Question 4 (Ground Transportation)"
  },
  {
    id: "vonlane",
    topics: [
      "vonlane", "austin", "bus", "coach", "luxury bus", "atx"
    ],
    shortTitle: "Vonlane (Austin Candidates)",
    relatedIds: ["hotel", "costs", "transportation"],
    sampleQuestions: [
      "How do I book Vonlane from Austin?",
      "Does PMG pay for Vonlane?",
      "Where do I choose my Vonlane seat and times?"
    ],
    question: "How do I book Vonlane from Austin?",
    answer: "We take care of your Vonlane booking directly!\n\nWhen you fill out your pre-event candidate survey, indicate your preferred departure times and seat choices. Our recruiting team will reserve your seats in Vonlane and email you your confirmed itinerary.",
    source: "GLP Experience Day FAQ • Question 5 (Vonlane Travel)"
  },
  {
    id: "costs",
    topics: [
      "cost", "costs", "price", "pay", "paying", "payment", "expense", "expenses",
      "reimburse", "reimbursement", "free", "covered", "breakfast", "lunch", "food",
      "meals", "catering", "catered", "dietary", "dinner"
    ],
    shortTitle: "Costs & Catering",
    relatedIds: ["flights", "hotel", "transportation"],
    sampleQuestions: [
      "Are there any costs associated with Experience Day?",
      "Do I need to pay for my flight upfront?",
      "Is food provided during Experience Day?",
      "What meals are covered?"
    ],
    question: "Are there any costs associated with Experience Day?",
    answer: "All costs are covered by PMG and we’re excited to welcome you to our office!\n\n• **Flights**: When booking through Navan, a PMG corporate card is already attached—no personal payment needed after selecting your flights.\n• **Ground Travel**: Covered via your 7-ride Uber voucher or Ramp reimbursement for driving mileage/gas.\n• **Meals**: Breakfast and lunch will be catered on Friday, so no need to worry about food costs either. Thursday night dinner is on your own, with a Visa gift card provided to cover the cost!",
    source: "GLP Experience Day FAQ • Question 6 (Expenses & Costs)"
  },
  {
    id: "dress",
    topics: [
      "dress", "wear", "wearing", "clothes", "clothing", "outfit", "attire", "shoes",
      "sneakers", "heels", "flats", "business casual", "suit", "tie", "jacket",
      "blazer", "sweater", "cold", "temperature", "layers", "comfort"
    ],
    shortTitle: "Dress Code & Attire",
    relatedIds: ["bring", "schedule", "hotel"],
    sampleQuestions: [
      "What is the dress code for Experience Day?",
      "Do I need to wear a suit and tie?",
      "What shoes should I wear?",
      "Is the office cold?"
    ],
    question: "What is the dress code?",
    answer: "We recommend **business casual**!\n\n• **What Works**: Dress shirts, button-downs, slacks, chinos, blouses, skirts, and dresses are all great choices.\n• **No Formal Wear Required**: Suits and ties are not necessary unless that is your personal preference.\n• **Comfortable Footwear**: We do plenty of walking throughout the office for tours and activities, so wear shoes you are comfortable walking in.\n• **Layers Recommended**: Conference room temperatures vary and some rooms run cool, so bringing a light sweater or blazer is recommended.",
    source: "GLP Experience Day FAQ • Question 7 (Dress Code)"
  },
  {
    id: "bring",
    topics: [
      "bring", "bringing", "laptop", "computer", "charger", "notebook", "pen",
      "materials", "supplies", "pack", "packing", "loaner", "borrow"
    ],
    shortTitle: "What to Bring",
    relatedIds: ["preparation", "dress", "hotel"],
    sampleQuestions: [
      "What do I need to bring with me?",
      "Do I need to bring my laptop?",
      "Can I borrow a laptop from PMG?"
    ],
    question: "What do I need to bring with me to Experience Day?",
    answer: "You will need to bring your **personal laptop** (and charger) for the group exercise and presentation.\n\n• **Borrowing a Laptop**: If you need to borrow a PMG laptop for the day, simply select that option on your pre-event candidate survey!\n• **Everything Else**: We provide notebooks, pens, and all exercise materials. Just bring yourself and your excitement!",
    source: "GLP Experience Day FAQ • Question 8 (What to Bring)"
  },
  {
    id: "preparation",
    topics: [
      "prepare", "preparation", "survey", "slides", "slide", "deck", "presentation",
      "present", "intro", "introduction", "behavioral", "interview", "dietary",
      "allergies", "homework", "ahead of time"
    ],
    shortTitle: "Pre-Event Preparation",
    relatedIds: ["bring", "schedule", "contact"],
    sampleQuestions: [
      "Is there anything I need to prepare ahead of time?",
      "What are the personal introduction slides?",
      "When is the candidate survey due?"
    ],
    question: "Anything I need to prepare ahead of time?",
    answer: "Yes, two quick action items before you arrive:\n\n1. **Candidate Survey**: Complete the survey emailed to you with your travel preferences, dietary restrictions, and logistics.\n2. **Personal Intro Slides**: Create and submit your short personal intro presentation. You will share your screen and present this at the start of your 2:1 behavioral interview so the team can get to know you personally! We also provide these slides to your interviewers in advance.",
    source: "GLP Experience Day FAQ • Question 9 (Preparation)"
  },
  {
    id: "schedule",
    topics: [
      "schedule", "agenda", "time", "timeline", "hours", "start", "end", "conclude",
      "departure", "depart", "interviews", "interviewers", "interview", "group exercise",
      "networking", "alumni", "lunch break", "8:00", "3:00", "friday schedule"
    ],
    shortTitle: "Schedule & Agenda",
    relatedIds: ["flights", "preparation", "timeline"],
    sampleQuestions: [
      "What is the schedule for Experience Day?",
      "What time does Experience Day start and end?",
      "When will I know who my interviewers are?",
      "What activities happen during the day?"
    ],
    question: "What is the schedule for the day? Will I know who my interviewers are ahead of time?",
    answer: "Here is the Experience Day agenda:\n\n• **8:00 – 8:45 AM**: Welcome, check-in, and catered breakfast\n• **8:45 – 11:00 AM**: Small Group Exercise briefing & working breakout sessions\n• **11:00 – 11:30 AM**: Small Group Presentations\n• **11:30 AM – 12:00 PM**: Catered lunch & break\n• **12:00 – 12:45 PM**: Speed networking with GLP alumni\n• **12:45 – 2:45 PM**: 2:1 Behavioral Interviews & Program Overview\n• **3:00 PM**: Official departure for home/airports\n\nYou will receive a personalized schedule with your specific interviewer names and group exercise teammates on Thursday before Experience Day!",
    source: "GLP Experience Day FAQ • Question 10 (Agenda & Schedule)"
  },
  {
    id: "contact",
    topics: [
      "contact", "email", "phone", "reach", "reach out", "question", "questions",
      "groupme", "help", "support", "emergency", "urgent", "delayed", "late",
      "lost", "recruiter", "recruiting team"
    ],
    shortTitle: "Contacting Recruiting",
    relatedIds: ["flights", "hotel", "timeline"],
    sampleQuestions: [
      "How do I contact the recruiting team?",
      "What if my flight is delayed or I'm running late?",
      "Where is the Experience Day GroupMe?"
    ],
    question: "What is the best way to communicate with the recruiting team if I have a question?",
    answer: "You can reach our team anytime through either channel:\n\n• **Email**: Feel free to email our inbox at campusrecruiting@pmg.com.\n• **GroupMe**: Send a message in your official Experience Day GroupMe channel for any urgent day-of or travel requests.\n• **GroupMe Access**: You will be added to your specific GroupMe the week of your Experience Day!\n\nWe’re happy to help and can't wait to meet you!",
    source: "GLP Experience Day FAQ • Question 11 (Communication)"
  },
  {
    id: "timeline",
    topics: [
      "hear back", "decision", "decisions", "offer", "offers", "results", "notification",
      "when", "how long", "timeline", "competing offer", "deadline", "ceo",
      "chief people officer", "mid-november"
    ],
    shortTitle: "Decision Timeline & Offers",
    relatedIds: ["schedule", "contact"],
    sampleQuestions: [
      "How soon will I hear back after Experience Day?",
      "When are job offers extended?",
      "What if I have an exploding or competing offer deadline?"
    ],
    question: "How soon will I hear back after Experience Day?",
    answer: "Our **CEO and Chief People Officer** will review feedback from all candidates who attend Experience Day.\n\n• **General Timing**: We are hoping to make final decisions by **mid-November** for all candidates who interview this fall.\n• **Competing Offers**: Please notify our recruiting team at campusrecruiting@pmg.com if you have any competing offers so we can try to expedite the decision-making process where we can!",
    source: "GLP Experience Day FAQ • Question 12 (Decisions & Offers)"
  },
  {
    id: "food",
    topics: [
      "food", "food provided", "meals", "meal", "breakfast", "lunch", "dinner",
      "eat", "eating", "catering", "catered", "dietary", "restrictions", "allergies",
      "allergy", "vegan", "vegetarian", "gluten", "visa gift card", "gift card", "thursday night dinner"
    ],
    shortTitle: "Food & Meals",
    relatedIds: ["costs", "schedule", "preparation"],
    sampleQuestions: [
      "Will food be provided?",
      "What meals are provided during Experience Day?",
      "How is Thursday night dinner handled?",
      "How do I let you know about dietary restrictions?"
    ],
    question: "Will food be provided?",
    answer: "Yes, food is provided throughout your visit!\n\n• **Friday Breakfast & Lunch**: Breakfast and lunch will be catered into the office on Friday for all candidates.\n• **Thursday Night Dinner**: Thursday night dinner is on your own, but we’ll provide a **Visa gift card** to cover the cost, and you can use your **Uber voucher** to get to and from the hotel!\n• **Dietary Restrictions**: If you have dietary restrictions, please indicate that on your candidate survey and we’ll be sure to accommodate that in the catering order!",
    source: "GLP Experience Day FAQ • Question 13 (Food & Catering)"
  },
  {
    id: "address",
    topics: [
      "address", "office address", "location", "office location", "where is pmg", "where is the office",
      "building", "dallas office", "olive st", "olive street", "floor", "19th floor", "floor 19",
      "directions", "find the office", "gps"
    ],
    shortTitle: "Office Address",
    relatedIds: ["driving", "transportation", "hotel"],
    sampleQuestions: [
      "What is the office address?",
      "Where is the PMG Dallas office located?",
      "What floor is PMG on in Dallas?",
      "What address should I give to my Uber?"
    ],
    question: "What is the office address?",
    answer: "The PMG Dallas Office is located at:\n\n**2601 Olive St.**\n**Floor 19**\n**Dallas, TX 75201**\n\n*(Note: If you are driving and parking, it is easiest to enter 'Happiest Hour' into GPS to arrive directly at the parking garage entrance on the right side of the building).*",
    source: "GLP Experience Day FAQ • Question 14 (Office Address)"
  }
];

if (typeof window !== 'undefined') {
  window.FAQ_DATA = FAQ_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FAQ_DATA };
}
