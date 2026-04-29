'use client';

import { portfolioData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-5 pb-[30px] border-t border-white/[0.06] text-[0.94rem] text-text-muted">
      <div className="w-[min(calc(100%-40px),1180px)] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>
            Portfolio for <span className="text-text">{portfolioData.profile.name}</span>.
          </p>
          <a 
            href="#top" 
            className="hover:text-text focus-visible:text-text transition-colors"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
