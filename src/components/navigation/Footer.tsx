'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' }
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Salesforce CRM', href: '/salesforce' },
      { label: 'Salesforce Vlocity', href: '/vlocity' },
      { label: 'Solutions Overview', href: '/solutions' }
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Salesforce Consulting', href: '/services#salesforce-consulting' },
      { label: 'Implementation & Dev', href: '/services#implementation' },
      { label: 'Managed Services', href: '/services#managed-services' },
      { label: 'Integration & Data', href: '/services#integration' },
      { label: 'Staff Augmentation', href: '/services#staff-augmentation' }
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Financial Services', href: '/industries#financial-services' },
      { label: 'Retail & Commerce', href: '/industries#retail-commerce' },
      { label: 'Communications', href: '/industries#communications' },
      { label: 'Government', href: '/industries#government' }
    ],
  }
];

const socialLinks = [
  { platform: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { platform: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1D3A 0%, #071633 100%)' }}>
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="container-vcs pt-20 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 mb-4 lg:mb-0 space-y-5">
            <Link href="/" className="flex items-center gap-2 group">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-105">
                {/* Outer boundary grid */}
                <circle cx="20" cy="20" r="18" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <line x1="20" y1="2" x2="20" y2="38" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <line x1="2" y1="20" x2="38" y2="20" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

                {/* Connected node lines */}
                <path d="M10 10 L20 20" stroke="#0057FF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M10 30 L20 20" stroke="#4DA8FF" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M30 20 L20 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

                {/* Endpoints */}
                <circle cx="10" cy="10" r="2.5" fill="#0057FF" />
                <circle cx="10" cy="30" r="2.5" fill="#4DA8FF" />
                <circle cx="30" cy="20" r="2.5" fill="#FFFFFF" />

                {/* Central Adaptive Node */}
                <circle cx="20" cy="20" r="4.5" fill="#0057FF" className="animate-pulse" />
                <circle cx="20" cy="20" r="2" fill="#FFFFFF" />
              </svg>
              <span className="text-lg font-bold text-white tracking-tight">VCS</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-[280px]">
              Value Cloud Services (VCS) is a premium Salesforce Consulting, Digital Transformation, Enterprise IT, Integration, and Staff Augmentation partner.
            </p>
            <div className="text-xs text-white/40 space-y-1">
              <p>Email: <a href="mailto:info@valuecloudservices.com" className="hover:text-primary-400">info@valuecloudservices.com</a></p>
              <p>Phone: <a href="tel:+916302194501" className="hover:text-primary-400">+91 6302194501</a></p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-500/30 flex items-center justify-center transition-all duration-200 group"
                  aria-label={social.platform}
                >
                  <svg className="w-4 h-4 fill-white/50 group-hover:fill-primary-400 transition-colors" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="py-10 border-b border-white/10 grid md:grid-cols-2 gap-8 text-white/50 text-sm">
          <div>
            <h4 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-3">US Headquarters</h4>
            <p>2108 O&apos;Keefe Court, Little Elm, Texas - 75068</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-3">India Offshore Delivery Center</h4>
            <p>4B, 4th Floor, Dhanalakshmi Towers, DK Road, Ameerpet, Hyderabad, Telangana - 500016</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Value Cloud Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
