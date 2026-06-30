export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryMetric {
  value: number;
  suffix: string;
  label: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: IndustrySolution[];
  metrics: IndustryMetric[];
  color: string;
}
