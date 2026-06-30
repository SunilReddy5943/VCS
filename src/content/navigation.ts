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
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Salesforce Consulting', href: '/services/salesforce-consulting' },
      { label: 'Implementation', href: '/services/implementation' },
      { label: 'Cloud Expertise', href: '/services/cloud-expertise' },
      { label: 'Managed Services', href: '/services/managed-services' },
      { label: 'Integration & Data', href: '/services/integration-data' },
      { label: 'Enterprise Apps', href: '/services/enterprise-apps' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Financial Services', href: '/industries/financial-services' },
      { label: 'Retail & Commerce', href: '/industries/retail-commerce' },
      { label: 'Government', href: '/industries/government' },
      { label: 'Communications', href: '/industries/communications' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Manufacturing', href: '/industries/manufacturing' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Sales Cloud', href: '/solutions/sales-cloud' },
      { label: 'Service Cloud', href: '/solutions/service-cloud' },
      { label: 'Marketing Cloud', href: '/solutions/marketing-cloud' },
      { label: 'Experience Cloud', href: '/solutions/experience-cloud' },
      { label: 'Analytics Cloud', href: '/solutions/analytics-cloud' },
      { label: 'CPQ', href: '/solutions/cpq' },
      { label: 'Industries', href: '/solutions/industries' },
    ],
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Insights',
    href: '/insights',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
