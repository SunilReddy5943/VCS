export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  benefits: ServiceBenefit[];
  workflowSteps: string[];
}
