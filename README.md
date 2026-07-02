# Prepwise – AI Interview Coach

> A portfolio project built to demonstrate Next.js, TypeScript, and AI integration skills — and to solve a real problem I faced during my own job search.

**Live Demo:** [prepwise-ten-amber.vercel.app](https://prepwise-ten-amber.vercel.app)  
**Demo Access:** Contact me for the password via [LinkedIn](https://www.linkedin.com/in/richard-dau/)

---

## What is Prepwise?

Prepwise is an AI-powered interview preparation tool for software developers. Paste your CV and a job description, and Prepwise analyses your profile match, identifies skill gaps, and generates personalised interview questions — so you walk into your next interview better prepared.

---

## Features

- **Match Score** — AI-generated percentage score showing how well your profile fits the role
- **Skill Gap Analysis** — Side-by-side view of your strengths and missing skills
- **Preparation Tips** — Personalised recommendations on what to study before the interview
- **Interview Questions** — Likely questions with tips on how to answer them best
- **Hidden Insights** — Four AI-generated observations that go beyond the standard analysis, surfacing subtle signals a recruiter might notice
- **CV Upload with Review** — Upload your CV as PDF or Word (.docx); extracted text opens in an editable preview so you can fix any parsing issues before analysis
- **Analysis History** — All past analyses saved locally so you can review them anytime
- **Multi-language Support** — Full German and English UI with automatic browser language detection
- **Password Protection** — Demo access protected to prevent API abuse

---

## Tech Stack

| Layer        | Technology                               |
| ------------ | ---------------------------------------- |
| Framework    | Next.js 16 (App Router)                  |
| Language     | TypeScript                               |
| Styling      | Tailwind CSS v4                          |
| AI           | Anthropic Claude API (claude-sonnet-4-6) |
| i18n         | next-intl                                |
| File Parsing | unpdf, mammoth                           |
| Deployment   | Vercel                                   |
| Storage      | localStorage                             |

---

## What I learned building this

- **Prompt Engineering** — Iteratively versioning prompts (v1–v5) to improve structure, output constraints, and context-awareness (e.g. injecting the current date so the model can correctly reason about employment timelines)
- **Next.js App Router** — File-based routing, server components, and API routes
- **API Route Development** — Building and securing serverless endpoints
- **Internationalization** — Locale-based routing, automatic language detection, and translation management with next-intl
- **File Handling** — Extracting text from PDFs and Word documents server-side, including position-based text sorting to correctly reconstruct multi-column layouts
- **State Management** — Managing complex UI state across multiple components in React
- **Responsive Design** — Mobile-first layouts with Tailwind CSS
- **Git Workflow** — Feature branches, pull requests, and semantic commit messages
- **Deployment** — Environment variables, Vercel deployment, and CI/CD via GitHub

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized routes (de/en)
│   │   ├── history/       # Analysis history pages
│   │   ├── about/         # About page
│   │   ├── layout.tsx     # Locale-aware root layout
│   │   └── page.tsx       # Main dashboard
│   └── api/
│       ├── analyze/       # Main AI analysis endpoint
│       ├── verify/        # Password verification endpoint
│       └── parse-file/    # PDF and Word file parsing endpoint
├── components/             # Reusable UI components
├── i18n/                   # next-intl routing and request config
├── lib/                    # Utility functions (history, file parser)
├── prompts/
│   └── analyze/
│       ├── de/             # Versioned German prompts (v1–v5)
│       └── en/             # Versioned English prompts
├── proxy.ts                # next-intl middleware (formerly middleware.ts)
└── types/                  # Shared TypeScript interfaces

messages/
├── de.json                 # German translations
└── en.json                 # English translations
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/r-dau/prepwise.git
cd prepwise

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

Add your keys to `.env.local`:

```env
ANTHROPIC_API_KEY=your_api_key_here
DEMO_PASSWORD=your_password_here
```

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Author

**Richard Dau** — Frontend Developer

- [GitHub](https://github.com/r-dau)
- [LinkedIn](https://www.linkedin.com/in/richard-dau/)
