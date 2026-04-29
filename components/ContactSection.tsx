'use client';

import { portfolioData } from '@/lib/data';

export default function ContactSection() {
  const { contactLinks } = portfolioData.profile;

  return (
    <section id="contact" className="py-[72px] pb-[84px] border-t border-white/[0.06]">
      <div className="w-[min(calc(100%-40px),1180px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_minmax(280px,0.95fr)] gap-[26px] items-end">
          <div>
            <p className="m-0 mb-3.5 text-teal uppercase text-[0.8rem] font-bold tracking-[0.08em]">
              Contact
            </p>
            <h2 className="m-0 mb-4 text-[1.75rem] md:text-[2.4rem] leading-[1.05]">
              Let&apos;s build reliable, user-friendly products together
            </h2>
            <p className="max-w-[62ch] text-base leading-[1.75] text-text-muted">
              If you are hiring for frontend or full-stack work, I would love to connect and talk
              through the products, dashboards, or platform work your team is building.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((link) => {
              const isExternal = link.href.startsWith('http');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="inline-flex items-center justify-center min-h-[46px] px-[18px] rounded-full border border-line-strong text-text bg-white/[0.02] hover:-translate-y-[1px] focus-visible:-translate-y-[1px] transition-transform"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
