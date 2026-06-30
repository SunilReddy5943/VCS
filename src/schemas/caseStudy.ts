export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  timeline: string;
  metrics: CaseStudyMetric[];
  testimonial: CaseStudyTestimonial;
  results: CaseStudyResult[];
}
