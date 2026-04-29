'use client';

import { portfolioData } from '@/lib/data';

export default function EducationSection() {
  const { education } = portfolioData.profile;

  return (
    <section id="education" className="py-[72px] border-t border-white/[0.06]">
      <div className="w-[min(calc(100%-40px),1180px)] mx-auto">
        <div className="grid gap-2 mb-[30px]">
          <p className="m-0 mb-3.5 text-teal uppercase text-[0.8rem] font-bold tracking-[0.08em]">
            Education
          </p>
          <h2 className="m-0 mb-4 text-[1.75rem] md:text-[2.4rem] leading-[1.05]">
            Academic background
          </h2>
          <p className="max-w-[62ch] text-base leading-[1.75] text-text-muted">
            My degree work focused on computer science and web application development, which gave
            me the base I now use in real-world MERN and PERN projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {education.map((item, index) => (
            <article 
              key={index}
              className="p-[22px] border border-line rounded-lg bg-gradient-to-b from-white/[0.03] to-white/[0.01]"
            >
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5 mb-3.5 text-amber text-[0.92rem] font-bold">
                <span>{item.dates}</span>
              </div>
              <h3 className="m-0 mb-2 text-[1.15rem] leading-[1.2]">{item.school}</h3>
              <p className="m-0 text-text-muted">{item.degree}</p>
              <p className="m-0 text-text-muted">{item.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
