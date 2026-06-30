// Site Configuration
export const siteConfig = {
  name: 'VCS',
  fullName: 'Value Cloud Services',
  title: 'VCS — Enterprise Salesforce Consulting & Digital Transformation',
  description: 'Value Cloud Services (VCS) delivers premium Salesforce consulting, implementation, managed services, integration, and digital transformation solutions for enterprises worldwide.',
  url: 'https://valuecloudservices.com',
  ogImage: 'https://valuecloudservices.com/og.png',
  links: {
    linkedin: 'https://linkedin.com/company/valuecloudservices',
    twitter: 'https://twitter.com/valuecloud',
  },
  contact: {
    address: '2B, Dhanalakshmi Towers, Dharam Karan Rd, Ameerpet, Hyderabad, Telangana 500016',
    phone: '+91 40 1234 5678',
    email: 'hello@valuecloudservices.com',
  },
} as const;

export type SiteConfig = typeof siteConfig;
