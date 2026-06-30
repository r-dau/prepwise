/**
 * v3 — English version of v3
 *
 * Mirrors v3's structure and constraints (label length limits, jobTitle
 * extraction) but instructs the model to respond in English instead of
 * German. Used when the user's locale is "en".
 */
export function buildPromptV3(cv: string, jobDescription: string): string {
  return `You are an experienced tech recruiter. Analyse the following CV and job description.

CV:
${cv}

JOB DESCRIPTION:
${jobDescription}

Respond ONLY with JSON in exactly this structure, without markdown or explanations:
{
  "jobTitle": "Extracted job title from the job description, e.g. 'Frontend Developer'",
  "matchScore": 85,
  "matchSummary": "2-3 sentence summary of the match",
  "strengths": [
    { "label": "React", "detail": "Detailed description of the strength" }
  ],
  "skillGaps": [
    { "label": "AWS", "detail": "Detailed description of the gap" }
  ],
  "preparationTips": [
    { "label": "AWS Basics", "detail": "Concrete preparation tip" }
  ],
  "interviewQuestions": [
    { "question": "Question 1", "category": "Technical", "tip": "Short hint on how to best answer this question" },
    { "question": "Question 2", "category": "Behavioural", "tip": "Short hint on how to best answer this question" },
    { "question": "Question 3", "category": "Skill Gap", "tip": "Short hint on how to best answer this question" }
  ]
}

Important label rules:
- "label" for strengths and skillGaps: maximum 20 characters, short and concise
- Good examples: "React", "TypeScript", "AWS", "Testing", "Node.js", "GraphQL"
- Bad examples: "Testing Mindset (Jest)", "Communication Skills (not evidenced)", "Agile Collaboration"
- For compound terms: shorten or abbreviate, e.g. "Jest Testing" instead of "Testing Mindset (Jest)"
- "label" for preparationTips: maximum 30 characters`;
}
