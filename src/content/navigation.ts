// =============================================================================
// Navigation Configuration — Value Cloud Services
// =============================================================================

export interface NavChild {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navLinks: NavLink[] = [
  {
    label: 'Salesforce Solutions',
    href: '/solutions',
    children: [
      { label: 'Sales Cloud', href: '/solutions/sales-cloud' },
      { label: 'Service Cloud', href: '/solutions/service-cloud' },
      { label: 'Marketing Cloud & Pardot', href: '/solutions/marketing-cloud' },
      { label: 'Commerce Cloud', href: '/solutions/commerce-cloud' },
      { label: 'Experience Cloud', href: '/solutions/experience-cloud' },
      { label: 'Data Cloud', href: '/solutions/data-cloud' },
      { label: 'Analytics & Tableau', href: '/solutions/analytics-cloud' },
      { label: 'MuleSoft Integration', href: '/services/integration' },
      { label: 'Agentforce AI Agents', href: '/solutions/agentforce' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Salesforce Consulting', href: '/services#salesforce-consulting' },
      { label: 'Implementation & Development', href: '/services#implementation' },
      { label: 'Managed Services & Support', href: '/services#managed-services' },
      { label: 'Integration & Data Services', href: '/services#integration' },
      { label: 'Staff Augmentation', href: '/services#staff-augmentation' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'Retail & Commerce', href: '/industries/retail-commerce' },
      { label: 'Government', href: '/industries/government' },
      { label: 'Communications & Vlocity', href: '/vlocity' },
      { label: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
      { label: 'Manufacturing & Energy', href: '/industries/manufacturing' },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
