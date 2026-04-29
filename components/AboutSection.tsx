'use client';

import { portfolioData } from '@/lib/data';

export default function AboutSection() {
  const { focusAreas } = portfolioData.profile;

  return (
    <section id="about" className="py-[72px] border-t border-white/[0.06]">
      <div className="w-[min(calc(100%-40px),1180px)] mx-auto">
        <div className="grid gap-2 mb-[30px]">
          <p className="m-0 mb-3.5 text-teal uppercase text-[0.8rem] font-bold tracking-[0.08em]">
            About
          </p>
          <h2 className="m-0 mb-4 text-[1.75rem] md:text-[2.4rem] leading-[1.05]">
            What I bring to product and engineering teams
          </h2>
          <p className="max-w-[62ch] text-base leading-[1.75] text-text-muted">
            I work across frontend and backend development, with a strong interest in secure
            authentication, scalable product flows, admin dashboards, and responsive UI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {focusAreas.map((area) => (
            <article 
              key={area.label}
              className="p-[22px] border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-white/[0.01]"
            >
              <span className="inline-flex items-center min-h-[30px] px-2.5 rounded-full bg-teal/[0.12] text-teal text-[0.84rem] font-bold">
                {area.label}
              </span>
              <h3 className="m-0 mt-4 mb-3 text-[1.15rem] leading-[1.2]">{area.title}</h3>
              <p className="m-0 text-text-muted leading-[1.65]">{area.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
