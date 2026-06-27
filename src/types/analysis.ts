export interface AnalysisResult {
  jobTitle: string;
  matchScore: number;
  matchSummary: string;
  strengths: { label: string; detail: string }[];
  skillGaps: { label: string; detail: string }[];
  preparationTips: { label: string; detail: string }[];
  interviewQuestions: { question: string; category: string; tip: string }[];
}
