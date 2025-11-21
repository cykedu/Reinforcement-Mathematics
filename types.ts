export interface Topic {
  title: string;
  details: string[];
}

export type VisualizationType = 'quadratic' | 'motion' | 'trig' | 'stats' | 'none' | 'sets' | 'matrices';

export interface Chapter {
  id: number;
  title: string;
  description: string;
  topics: Topic[];
  visualization: VisualizationType;
}

export interface FormLevel {
  id: number;
  name: string;
  chapters: Chapter[];
}