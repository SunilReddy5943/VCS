export interface HeroContent {
  badge: string;
  title: string[];
  subtitle: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  solution: string;
  icon: string;
}

export interface PlatformNode {
  id: string;
  label: string;
  description: string;
  category: 'ai' | 'analytics' | 'crm' | 'integration' | 'core';
  x: number;
  y: number;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  phase: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface HomeContentSchema {
  hero: HeroContent;
  trustLogos: string[];
  problems: ProblemItem[];
  platformNodes: PlatformNode[];
  processSteps: ProcessStep[];
  stats: StatItem[];
  technologyPartners: string[];
}
