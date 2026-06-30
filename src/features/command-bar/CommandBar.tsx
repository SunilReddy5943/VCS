'use client';
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

interface SearchItem {
  title: string;
  category: string;
  href: string;
}

const searchItems: SearchItem[] = [
  { title: 'Sales Cloud Solution', category: 'Solutions', href: '/solutions' },
  { title: 'Service Cloud Solution', category: 'Solutions', href: '/solutions' },
  { title: 'Marketing Cloud Solution', category: 'Solutions', href: '/solutions' },
  { title: 'Experience Cloud Solution', category: 'Solutions', href: '/solutions' },
  { title: 'Analytics Cloud Solution', category: 'Solutions', href: '/solutions' },
  { title: 'CPQ Pricing Solution', category: 'Solutions', href: '/solutions' },
  { title: 'Financial Services Salesforce Industry', category: 'Industries', href: '/industries' },
  { title: 'Retail & Commerce Omnichannel Industry', category: 'Industries', href: '/industries' },
  { title: 'Government CRM Digital Portal Industry', category: 'Industries', href: '/industries' },
  { title: 'Healthcare Patient CRM Industry', category: 'Industries', href: '/industries' },
  { title: 'Telecommunications CRM Industry', category: 'Industries', href: '/industries' },
  { title: 'Manufacturing Process Automation Industry', category: 'Industries', href: '/industries' },
  { title: 'Case Study: Meridian Financial Group CRM', category: 'Case Studies', href: '/case-studies' },
  { title: 'Case Study: RetailMax Omnichannel', category: 'Case Studies', href: '/case-studies' },
  { title: 'Case Study: Government Portal Adoption', category: 'Case Studies', href: '/case-studies' },
  { title: 'Resource: Salesforce Migration Blueprint', category: 'Resources', href: '/resources' },
  { title: 'Resource: Enterprise ROI Assessment Guide', category: 'Resources', href: '/resources' },
  { title: 'Resource: Implementation Checklist', category: 'Resources', href: '/resources' },
  { title: 'About Value Cloud Services', category: 'About', href: '/about' },
  { title: 'Contact / Book Consultation', category: 'Contact', href: '/contact' },
];

export default function CommandBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Listen for Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Autofocus when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Filtering search items based on input query
  const filtered = searchItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Keyboard navigation within search results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        router.push(filtered[selectedIndex].href);
        setIsOpen(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-32 px-4">
          {/* Backdrop Blur Mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Search Box Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-[#0A0A0F]/90 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Input Wrapper */}
            <div className="flex items-center border-b border-white/10 px-4 py-3">
              <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search resources, solutions, case studies..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400"
              >
                ESC
              </button>
            </div>

            {/* Results Panel */}
            <div className="max-h-80 overflow-y-auto p-2 scrollbar-hide">
              {filtered.length > 0 ? (
                filtered.map((item, i) => {
                  const active = i === selectedIndex;
                  return (
                    <div
                      key={`${item.title}-${i}`}
                      onClick={() => {
                        router.push(item.href);
                        setIsOpen(false);
                      }}
                      onMouseEnter={() => setSelectedIndex(i)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors duration-150 ${
                        active ? 'bg-primary-500/20 border border-primary-500/20' : 'border border-transparent'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className={`text-sm font-semibold ${active ? 'text-white' : 'text-gray-300'}`}>
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-primary-400 tracking-wider uppercase bg-primary-500/10 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="px-4 py-8 text-center text-sm text-gray-500">
                  No results found for &ldquo;{query}&rdquo;
                </div>
              )}
            </div>

            {/* Footer Commands bar */}
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] text-gray-500 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span>Select</span>
                <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10">↑↓</kbd>
                <span>Confirm</span>
                <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10">Enter</kbd>
              </div>
              <div>
                <span>Cmd+K to Close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
