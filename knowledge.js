// PMG Graduate Leadership Program (GLP) Experience Day Knowledge Base
// Source: GLP Experience Day FAQ’s Google Doc

var FAQ_DATA = [
  {
    id: "flights",
    topics: ["flights", "flight", "navan", "airport", "plane", "travel", "fly", "booking", "airline", "dfw", "love field", "dallas"],
    question: "How do I book my flight?",
    shortTitle: "Booking Flights",
    answer: "You will receive an email from the Navan travel platform after speaking with a recruiter and confirming your Experience Day date. The email contains the office address, allowed travel dates, and other important logistics.\n\n• Airline & Airports: You can choose any airline that fits your needs and fly into either Dallas Love Field (DAL) or Dallas Fort Worth (DFW).\n• Arrival & Departure: We recommend arriving in Dallas Thursday afternoon or early evening, and departing Friday after 6:00 PM so you have ample time to reach the airport after interviews conclude at 3:00 PM.\n• Weekend Stay: If you want to spend the weekend in Dallas, your return flight is covered through Sunday! (You will just need to cover your own hotel accommodations for Friday and Saturday night).\n\nIf you plan to stay beyond Friday or have questions, reach out to campusrecruiting@pmg.com.",
    source: "GLP Experience Day FAQ • Travel Logistics"
  },
  {
    id: "hotel",
    topics: ["hotel", "room", "stay", "accommodations", "lodging", "luggage", "bags", "suitcase", "checkout", "check-out"],
    question: "Do I need to book a hotel?",
    shortTitle: "Hotel Details",
    answer: "Nope! We have a hotel room block and our recruiting team will add your name to it automatically.\n\n• Location: The hotel is located very close to the PMG Dallas office; we'll send the exact address the week of Experience Day.\n• Thursday Night Covered: The PMG room block covers Thursday night with checkout on Friday morning.\n• Luggage Storage: You can bring your luggage directly to the office on Friday morning—we have a secure space dedicated to holding your bags throughout the interview day.\n• Local Candidates: Local DFW candidates are also welcome to stay at the hotel Thursday night so you don't have to navigate Friday morning traffic!\n• Weekend Stays: If staying through the weekend, you will need to arrange and cover your own hotel accommodations for Friday and Saturday night.",
    source: "GLP Experience Day FAQ • Accommodations"
  },
  {
    id: "driving",
    topics: ["driving", "drive", "car", "parking", "park", "local", "garage", "validation", "ticket", "ramp", "reimbursement", "mileage", "gas"],
    question: "What if I’m driving or a local candidate?",
    shortTitle: "Driving & Parking",
    answer: "If you're driving to Experience Day:\n\n• Parking: Park in a PMG visitor spot on the 5th floor of our parking garage. (Tip: Enter 'Happiest Hour' into your GPS—it leads directly to the garage entrance on the right side of the building).\n• Validation: Bring your parking ticket inside the office with you so our team can validate it!\n• Mileage & Gas: Keep track of your mileage and gas receipts. We will set you up with a Ramp account for reimbursement following Experience Day.",
    source: "GLP Experience Day FAQ • Local & Parking"
  },
  {
    id: "transportation",
    topics: ["uber", "voucher", "rideshare", "taxi", "transport", "transportation", "getting around", "lyft", "rides"],
    question: "How do I get around Dallas if I’m not driving?",
    shortTitle: "Uber Voucher & Ground Travel",
    answer: "We provide an Uber voucher that covers 7 rides for your trip!\n\n• What it covers: Airport transport to/from your home airport, to/from Dallas airports, traveling between the hotel and office, and getting dinner Thursday night.\n• How to claim: You’ll receive an email with your claim code to load the voucher directly into your mobile Uber app.",
    source: "GLP Experience Day FAQ • Ground Transportation"
  },
  {
    id: "vonlane",
    topics: ["vonlane", "austin", "bus", "coach"],
    question: "How do I book Vonlane from Austin?",
    shortTitle: "Vonlane (Austin Candidates)",
    answer: "We take care of that for you!\n\nWhen you complete your candidate survey, indicate your preferred departure times and seat choices. Our recruiting team will book your ticket directly through Vonlane and forward your confirmed itinerary via email.",
    source: "GLP Experience Day FAQ • Travel Logistics"
  },
  {
    id: "costs",
    topics: ["cost", "costs", "price", "pay", "expenses", "expense", "reimburse", "reimbursement", "free", "covered", "food", "meals", "breakfast", "lunch"],
    question: "Are there any costs associated with Experience Day?",
    shortTitle: "Covered Costs & Meals",
    answer: "Nope! All travel and event costs are fully covered by PMG.\n\n• Flights: When booking via Navan, a PMG corporate card is already linked, so no payment is needed at checkout.\n• Ground Travel: Covered via your Uber voucher or gas/mileage reimbursement through Ramp.\n• Meals: Breakfast and lunch are fully catered on Friday at the office, so you don't need to worry about meal expenses during Experience Day.",
    source: "GLP Experience Day FAQ • Expenses"
  },
  {
    id: "dress",
    topics: ["dress", "wear", "attire", "clothes", "clothing", "outfit", "shoes", "business casual", "suit", "tie", "temperature", "sweater", "jacket"],
    question: "What is the dress code?",
    shortTitle: "Dress Code & What to Wear",
    answer: "We recommend business casual!\n\n• What works: Dress shirts, dress pants, slacks, blouses, skirts, and dresses are all great options.\n• No formal wear needed: Suits and ties are not required unless that's your personal preference.\n• Comfortable shoes: We do a fair amount of walking around the office during tours and activities, so wear comfortable shoes.\n• Temperature & layers: Some conference rooms run cooler than others, so bringing a sweater or light layer is recommended.",
    source: "GLP Experience Day FAQ • Preparation"
  },
  {
    id: "bring",
    topics: ["bring", "laptop", "computer", "items", "supplies", "materials", "pack", "packing"],
    question: "What do I need to bring with me to Experience Day?",
    shortTitle: "What to Bring",
    answer: "You will need to bring your personal laptop (unless you indicated on your survey that you need to borrow a PMG loaner laptop for the day).\n\nOtherwise, just bring yourself and your enthusiasm!",
    source: "GLP Experience Day FAQ • Preparation"
  },
  {
    id: "preparation",
    topics: ["prepare", "preparation", "survey", "slides", "presentation", "present", "dietary", "intro", "introduction", "behavioral", "ahead of time"],
    question: "Anything I need to prepare ahead of time?",
    shortTitle: "Pre-Event Preparation",
    answer: "Yes, two quick items to prepare before you arrive:\n\n1. Candidate Survey: Please complete the survey sent by email with your travel details, dietary restrictions, and logistics.\n2. Personal Intro Slides: Submit your personal introduction slides. You’ll use these at the start of your behavioral interview to introduce yourself to team members you haven't met yet. You will share your screen and present, and our team provides your slides to interviewers ahead of time so they can get to know you!",
    source: "GLP Experience Day FAQ • Preparation"
  },
  {
    id: "schedule",
    topics: ["schedule", "agenda", "time", "timeline", "interviews", "interviewers", "interview", "exercise", "group", "presentation", "networking", "alumni", "departure"],
    question: "What is the schedule for the day? Will I know my interviewers ahead of time?",
    shortTitle: "Schedule & Agenda",
    answer: "Here is the general Experience Day schedule:\n\n• 8:00 – 8:45 AM: Welcome, check-in, and breakfast\n• 8:45 – 11:00 AM: Small Group Exercise Briefing & Working Sessions\n• 11:00 – 11:30 AM: Small Group Presentations\n• 11:30 AM – 12:00 PM: Lunch & Break\n• 12:00 – 12:45 PM: Speed Networking with GLP Alumni\n• 12:45 – 2:45 PM: 2:1 Interviews & Program Overview\n• 3:00 PM: Departure for home\n\nYou will receive a detailed schedule with your specific interviewers' names and group exercise members on Thursday before Experience Day!",
    source: "GLP Experience Day FAQ • Agenda"
  },
  {
    id: "contact",
    topics: ["contact", "email", "reach out", "question", "questions", "groupme", "help", "recruiting team", "emergency", "urgent"],
    question: "What is the best way to communicate with the recruiting team?",
    shortTitle: "Contacting the Team",
    answer: "Feel free to reach out anytime:\n\n• Email: campusrecruiting@pmg.com\n• GroupMe: Send a message in your Experience Day GroupMe channel for any urgent day-of or travel updates.\n\nWe’re always happy to help and excited to meet you!",
    source: "GLP Experience Day FAQ • Communication"
  },
  {
    id: "timeline",
    topics: ["hear back", "decision", "decisions", "offers", "offer", "competing", "timeline", "results", "ceo", "notification", "when"],
    question: "How soon will I hear back after Experience Day?",
    shortTitle: "Decision Timeline & Offers",
    answer: "Our CEO and Chief People Officer review feedback from all candidates who attend Experience Day.\n\n• Timeline: We aim to communicate final decisions by mid-November for all fall interviewees.\n• Competing Offers: If you have an active competing offer deadline, please notify our recruiting team at campusrecruiting@pmg.com so we can expedite your decision wherever possible!",
    source: "GLP Experience Day FAQ • Outcomes"
  }
];

if (typeof window !== 'undefined') {
  window.FAQ_DATA = FAQ_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FAQ_DATA };
}
