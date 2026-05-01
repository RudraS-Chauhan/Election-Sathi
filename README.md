# 🗳️ Election Saathi — AI-Powered Election Education Assistant

<div align="center">

![Election Saathi Banner](https://img.shields.io/badge/Election%20Saathi-Civic%20AI%20Assistant-FF671F?style=for-the-badge&logo=google&logoColor=white)

[![Built with Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini%202.0-4285F4?style=flat-square&logo=google&logoColor=white)](https://aistudio.google.com)
[![Google Maps](https://img.shields.io/badge/Google-Maps%20API-34A853?style=flat-square&logo=googlemaps&logoColor=white)](https://developers.google.com/maps)
[![ECI](https://img.shields.io/badge/Data%20Source-ECI%20India-FF671F?style=flat-square)](https://eci.gov.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![PromptWars](https://img.shields.io/badge/PromptWars-Virtual%202025-046A38?style=flat-square)](https://promptwars.in)

**Your step-by-step guide to India's election process — interactive, bilingual, and AI-powered.**

[Live Demo](#) · [Report Bug](mailto:promptwarssupport@hack2skill.com) · [ECI Official Site](https://eci.gov.in)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Chosen Vertical](#-chosen-vertical)
- [Problem Statement](#-problem-statement)
- [Key Features](#-key-features)
- [Google Services Used](#-google-services-used)
- [How It Works](#-how-it-works)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Usage Guide](#-usage-guide)
- [Assumptions Made](#-assumptions-made)
- [Accessibility](#-accessibility)
- [Screenshots](#-screenshots)
- [Built With](#-built-with)
- [Author](#-author)

---

## 🌟 Overview

**Election Saathi** (meaning *Election Companion* in Hindi) is a smart, interactive civic education assistant built for the Google PromptWars Virtual hackathon. It helps Indian citizens — especially first-time voters — understand the election process, timelines, voter registration, polling procedures, and their fundamental democratic rights.

India has over **960 million registered voters**, yet millions — particularly youth and rural citizens — remain unaware of basic voting procedures, registration steps, or how to find their polling booth. Election Saathi bridges this gap through a conversational AI interface, interactive tools, and real-world utility features — all in a single, accessible web application.

---

## 🎯 Chosen Vertical

**Civic Technology / Election Education**

This project falls under the civic education vertical — using technology to empower citizens with knowledge about democratic processes. The assistant is designed to be useful at every stage of an election cycle: before (registration, awareness), during (polling day guidance), and after (understanding results and grievances).

---

## 🔍 Problem Statement

> *Create an assistant that helps users understand the election process, timelines, and steps in an interactive and easy-to-follow way.*

Existing resources from the Election Commission of India (ECI) are comprehensive but not conversational. A citizen asking "What do I bring to vote?" must navigate multiple PDFs and official pages. Election Saathi answers that question instantly, in plain language, with the option to ask follow-up questions — just like talking to a knowledgeable friend.

**Core gaps this project addresses:**

- First-time voters don't know the 10-stage election process end-to-end
- Registration deadlines and document requirements are unclear to most citizens
- Polling booth information is scattered across government portals
- No single tool exists that combines AI Q&A + timeline + eligibility check + quiz
- Accessibility for differently-abled users is an afterthought in most civic tools

---

## ✨ Key Features

### 🤖 AI-Powered Election Chat
Conversational assistant powered by **Google Gemini 2.0 Flash**. Ask anything about Indian elections — voter registration, EVM usage, VVPAT, Model Code of Conduct, candidate verification — and get instant, accurate, bullet-pointed answers grounded in ECI guidelines.

### 🎙️ Voice Input
Uses the browser's native **Web Speech API** to accept voice questions. Click the mic, speak your question in English or Hindi, and Gemini responds. Built for accessibility and rural users who find typing difficult.

### ✅ Voter Eligibility Checker
Interactive tool — enter your age and select your state — get an instant eligibility result with explanation. Includes state-specific information about upcoming elections.

### 📅 Interactive Election Timeline
10-stage visual timeline of the Indian election process:
1. Election Announcement & MCC
2. Voter List Finalization
3. Nomination Filing
4. Scrutiny of Nominations
5. Withdrawal of Candidature
6. Election Campaign Period
7. Polling Day (7am–6pm)
8. Vote Counting
9. Result Declaration
10. Oath Taking

Each stage is expandable with detailed information and an "Ask Saathi" button to dive deeper via AI chat.

### ⏱️ Live Election Countdown
Real-time countdown timer to the next major Indian state election. Updates every second — creates urgency and civic awareness on first load.

### 📝 Election Day Checklist
8-point interactive checklist (EPIC card, booth address, voter roll check, etc.) that persists via `localStorage`. Shows a "Ready to Vote! 🗳️" banner when all items are checked.

### 🧠 Election Knowledge Quiz
5-question multiple choice quiz testing knowledge of Indian election procedures. Wrong answers are automatically explained by Gemini, turning mistakes into learning moments.

### 🗺️ Polling Booth Locator
Google Maps embed centered on India. Enter your pincode and the app opens a Google Maps search for nearby polling stations — no API key required for the basic embed feature.

### 📤 WhatsApp Share
Every AI response has a one-click "Share on WhatsApp" button. Citizens can instantly share election information with family members — turning the app into a viral civic education tool.

### 🔗 ECI Quick Links
Direct links to official ECI portals:
- [voters.eci.gov.in](https://voters.eci.gov.in) — Check voter registration
- [nvsp.in](https://nvsp.in) — Download EPIC card
- [eci.gov.in](https://eci.gov.in) — Official ECI home
- Complaint portal, affidavit checker, and more

### 🌙 Dark Mode
Full dark mode toggle with `localStorage` persistence. Clean, accessible contrast in both modes.

---

## 🔧 Google Services Used

| Google Service | How It's Used | Scoring Criterion |
|---|---|---|
| **Google Gemini 2.0 Flash** | Core AI engine — answers all election questions, explains quiz mistakes, streams contextual responses | Google Services, Efficiency |
| **Google Maps Embed API** | Polling booth locator — free embed iframe + pincode-based search redirect | Google Services, Usability |
| **Web Speech API** | Voice input for the chat — browser-native, converts speech to text before sending to Gemini | Accessibility, Innovation |
| **Google AI Studio** | Development platform used to build and prototype the entire application | Google Services |

---

## ⚙️ How It Works

```
User Question (text or voice)
        ↓
Web Speech API (if voice) → converts to text
        ↓
Election knowledge context injected into prompt
        ↓
Google Gemini 2.0 Flash API call
        ↓
Response rendered as chat bubble
        ↓
WhatsApp share button appended to response
```

The app uses a structured **system prompt** that instructs Gemini to:
- Always respond in simple, non-technical language
- Use numbered steps and bullet points for processes
- Never give political opinions or endorse candidates
- Cite ECI guidelines where relevant
- Respond in Hindi if the user writes in Hindi

Additionally, a **static election knowledge base** is injected as context with every API call, covering voter registration steps, EVM instructions, constituency information, and grievance procedures — reducing hallucination and improving accuracy.

---

## 🏗️ Architecture

```
election-saathi/
│
├── index.html              ← Complete application (single file)
│   ├── <style>             ← All CSS: layout, components, dark mode, animations
│   ├── HTML sections:
│   │   ├── Navbar          ← Logo, nav links, dark mode toggle
│   │   ├── Tricolor bar    ← Saffron / White / Green (4px each)
│   │   ├── Hero            ← Heading, tagline, countdown timer
│   │   ├── Eligibility     ← Age + state checker
│   │   ├── Quick Actions   ← 6 preset question buttons
│   │   ├── Chat            ← AI conversation interface + voice input
│   │   ├── Timeline        ← 10-stage interactive election timeline
│   │   ├── Quiz            ← 5-question election knowledge MCQ
│   │   ├── Checklist       ← Election day preparation checklist
│   │   ├── Maps            ← Google Maps embed + pincode search
│   │   └── ECI Links       ← Official portal quick links
│   └── <script>            ← All JS: Gemini API, Speech API, quiz logic
│
└── README.md               ← This file
```

**Design decisions:**
- **Single HTML file** — zero build step, works by simply opening in a browser or hosting on GitHub Pages. Maximum accessibility for judges and users alike.
- **localStorage** — persists API key, dark mode preference, and checklist state without any backend
- **No frameworks** — pure HTML, CSS, JavaScript. Demonstrates clean fundamentals and keeps the repo under 10MB with ease
- **Gemini called client-side** — API key is stored in localStorage and provided by the user, keeping the app stateless and serverless

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Edge, Firefox, Safari)
- A free Google Gemini API key from [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

### Option 1 — Run locally (instant)

```bash
# Clone the repository
git clone https://github.com/RudraS-Chauhan/Election-Sathi.git

# Navigate into the folder
cd election-saathi

# Open directly in browser — no server needed
# On Windows:
start index.html

# On Mac:
open index.html

# On Linux:
xdg-open index.html
```

### Option 2 — GitHub Pages (live URL)

1. Fork this repository
2. Go to Settings → Pages
3. Set source to `main` branch, root folder
4. Your app is live at `https://RudraS-Chauhan.github.io/election-saathi`

### Option 3 — Any static host

Upload `index.html` to Netlify Drop, Vercel, or any static hosting — it works anywhere with no configuration.

### API Key Setup

When you open the app, you'll see an API key input field at the top. Paste your free Gemini API key there. The key is saved to your browser's `localStorage` — it never leaves your device or gets sent to any server other than Google's Gemini API directly.

Get your free key (no credit card needed for free tier):
👉 [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

---

## 📖 Usage Guide

| Feature | How to use |
|---|---|
| **AI Chat** | Type any election question and press Send, or click a Quick Action button |
| **Voice Input** | Click the mic button 🎙️, speak your question, it auto-sends |
| **Eligibility Check** | Enter your age, select state → instant result |
| **Timeline** | Click any stage card to expand full details |
| **Quiz** | Click "Start Quiz" → answer 5 MCQs → see score + AI explanations |
| **Checklist** | Tick items as you prepare for voting day |
| **Booth Locator** | Enter your pincode → click "Find Booths" → Google Maps opens |
| **WhatsApp Share** | Click "Share" on any AI response to send via WhatsApp |
| **Dark Mode** | Click the moon icon 🌙 in the navbar |

---

## 📋 Assumptions Made

1. **Election data scope** — The app covers general Indian Lok Sabha and Vidhan Sabha election procedures as defined by the Election Commission of India. It is not calibrated for any specific live ongoing election.

2. **Booth locator accuracy** — The polling booth map uses a Google Maps search redirect based on pincode. Actual assigned booth for a specific voter must be verified at [voters.eci.gov.in](https://voters.eci.gov.in). The app clearly communicates this distinction.

3. **Countdown timer** — The election countdown is set to the next major state election cycle. Dates may need updating as ECI announces new schedules.

4. **API key responsibility** — Users provide their own Gemini API key. The app operates within Google AI Studio's free tier limits (1,500 requests/day), which is more than sufficient for individual and demo use.

5. **Language** — The AI responds in Hindi when the user writes in Hindi, using Gemini's native multilingual capability. No third-party translation API is used.

6. **Offline use** — The app requires an internet connection for Gemini API calls. The timeline, checklist, quiz, and static content work offline after first load.

---

## ♿ Accessibility

Election Saathi is built with WCAG 2.1 AA compliance in mind:

- `aria-label` attributes on all interactive elements
- `role="log"` and `aria-live="polite"` on the chat message container
- Full keyboard navigation — all features reachable via Tab key
- Visible focus rings on all interactive elements
- High contrast color ratios (saffron on white: 3.1:1, white on saffron: passes AA for large text)
- Screen reader compatible heading hierarchy (`h1` → `h2` → `h3`)
- Voice input as an alternative to typing
- Dark mode for users with light sensitivity

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, animations, dark mode, responsive layout |
| Vanilla JavaScript (ES6+) | App logic, API calls, state management |
| Google Gemini 2.0 Flash | AI question answering |
| Google Maps Embed API | Polling booth locator |
| Web Speech API | Voice input (browser-native) |
| localStorage API | Key, checklist, and preference persistence |
| Google AI Studio | Development and prototyping platform |

**No npm. No build step. No frameworks. Just open and use.**

---

## 📸 Screenshots

> *Add screenshots of your running app here*

| Feature | Screenshot |
|---|---|
| Home + Chat | ** |
| Election Timeline | *(add screenshot)* |
| Voter Eligibility Checker | ** |
| Election Quiz | *(add screenshot)* |
| Polling Booth Map | *(add screenshot)* |

---

## 👤 Author

**Participant — PromptWars: Virtual**
Built for the Google × Hack2skill PromptWars Virtual Hackathon

- Challenge: Election Education Assistant
- Platform: Google AI Studio + Google Antigravity
- Submission: PromptWars Virtual 2025

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgements

- [Election Commission of India](https://eci.gov.in) — for publicly available election procedure data
- [Google AI Studio](https://aistudio.google.com) — for the Gemini API and development platform
- [Hack2skill](https://hack2skill.com) — for organizing PromptWars Virtual
- [voters.eci.gov.in](https://voters.eci.gov.in) — official voter registration portal referenced throughout

---

<div align="center">

Made with dedication for Indian democracy 🇮🇳

**Election Saathi — Know your vote. Cast your vote.**

</div>
