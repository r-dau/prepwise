/**
 * v4 — Hidden Insights (English)
 *
 * English counterpart to de/v4.ts. Same structure and rules, but
 * instructs the model to respond in English.
 */

export function buildPromptV4(cv: string, jobDescription: string): string {
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
  ],
  "hiddenInsights": [
    { "icon": "star", "text": "Observation about missing metrics or impact in the CV" },
    { "icon": "target", "text": "Unstated requirement from the job posting worth noting" },
    { "icon": "chat", "text": "Gap between the profile and job posting to prepare for" },
    { "icon": "pen", "text": "Observation about the tech stack or style worth noting" }
  ]
}

Important label rules:
- "label" for strengths and skillGaps: maximum 20 characters, short and concise
- Good examples: "React", "TypeScript", "AWS", "Testing", "Node.js", "GraphQL"
- Bad examples: "Testing Mindset (Jest)", "Communication Skills (not evidenced)", "Agile Collaboration"
- For compound terms: shorten or abbreviate, e.g. "Jest Testing" instead of "Testing Mindset (Jest)"
- "label" for preparationTips: maximum 30 characters

Important rules for hiddenInsights:
- Exactly 4 insights, 1-2 sentences each
- "icon" must be exactly one of these four values: "star", "target", "chat", "pen"
- Focus on observations NOT already covered in strengths, skillGaps or preparationTips
- Be concrete and actionable, avoid generic statements
- Good example: "Your CV shows strong frontend skills but lacks concrete results or impact numbers. Add measurable achievements."
- Bad example: "Make sure to prepare well."`;
}
