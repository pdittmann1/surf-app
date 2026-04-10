export type AnalysisStatus = 'idle' | 'loading' | 'success' | 'error';

export interface PostureResult {
  summary: string;
  restrictions: {
    area: string;
    severity: 'low' | 'moderate' | 'high';
    observation: string;
  }[];
  surfRelevance: string;
  suggestedFocus: string;
}
