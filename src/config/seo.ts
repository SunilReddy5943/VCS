import { siteConfig } from './site';

export const seoConfig = {
  defaultTitle: siteConfig.title,
  titleTemplate: `%s | ${siteConfig.fullName}`,
  defaultDescription: siteConfig.description,
  keywords: [
    'Salesforce Consulting',
    'Digital Transformation',
    'CRM Implementation',
    'Enterprise Solutions',
    'Managed Services',
    'Salesforce Integration',
    'Cloud Solutions',
    'Value Cloud Services',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: '@valuecloud',
    site: '@valuecloud',
  },
} as const;
