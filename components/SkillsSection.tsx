'use client';

import { portfolioData } from '@/lib/data';

export default function SkillsSection() {
  const { skillGroups } = portfolioData.profile;

  return (
    <section id="skills" className="py-[72px] border-t border-white/[0.06]">
      <div className="w-[min(calc(100%-40px),1180px)] mx-auto">
        <div className="grid gap-2 mb-[30px]">
          <p className="m-0 mb-3.5 text-teal uppercase text-[0.8rem] font-bold tracking-[0.08em]">
            Skills
          </p>
          <h2 className="m-0 mb-4 text-[1.75rem] md:text-[2.4rem] leading-[1.05]">
            Technologies I use across frontend, backend, and integrations
          </h2>
          <p className="max-w-[62ch] text-base leading-[1.75] text-text-muted">
            My stack is centered around React-based frontend work and Node.js-based backend
            development, supported by modern authentication and API integration patterns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {skillGroups.map((group) => (
            <article 
              key={group.title}
              className="p-[22px] border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-white/[0.01]"
            >
              <h3 className="m-0 mb-3.5 text-[1.15rem] leading-[1.2]">{group.title}</h3>
              <ul className="flex flex-wrap gap-2.5 p-0 list-none leading-[1.5]">
                {group.items.map((item) => (
                  <li 
                    key={item}
                    className="min-h-[34px] px-3 rounded-full inline-flex items-center justify-center bg-white/[0.04] border border-white/[0.08]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
