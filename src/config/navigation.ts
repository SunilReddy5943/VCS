export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Salesforce Expertise', href: '/salesforce' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const ctaLink = {
  label: 'Book Consultation',
  href: '/contact',
} as const;
