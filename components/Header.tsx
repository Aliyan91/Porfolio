'use client';

import { portfolioData } from '@/lib/data';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-bg/85 backdrop-blur-[18px] border-b border-white/[0.08]">
      <div className="w-[min(calc(100%-40px),1180px)] mx-auto">
        <div className="flex items-center justify-between gap-6 min-h-[76px]">
          <a 
            href="#top" 
            className="text-base font-bold tracking-normal hover:text-text focus-visible:text-text transition-colors"
          >
            {portfolioData.profile.name}
          </a>
          
          <nav className="hidden md:flex items-center gap-6 text-text-muted text-[0.96rem]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-text focus-visible:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center min-h-[46px] px-[18px] rounded-full bg-text text-[#111315] font-semibold border border-transparent hover:-translate-y-[1px] focus-visible:-translate-y-[1px] transition-transform"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
