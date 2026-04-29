'use client';

import { useState, useCallback, useRef } from 'react';
import { portfolioData } from '@/lib/data';
import HeroCanvas from './HeroCanvas';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [pointer, setPointer] = useState({ x: 74, y: 32 });

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width;
    const normalizedY = (e.clientY - rect.top) / rect.height;
    
    setPointer({
      x: normalizedX * 100,
      y: normalizedY * 100
    });
    setTilt({
      x: (normalizedX - 0.5) * 18,
      y: (normalizedY - 0.5) * 18
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    setPointer({ x: 74, y: 32 });
    setTilt({ x: 0, y: 0 });
  }, []);

  const { profile } = portfolioData;

  return (
    <section 
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-clip py-12 md:py-[48px] md:pb-[72px] isolation isolate border-t border-white/[0.06]"
      style={{
        '--tilt-x': tilt.x,
        '--tilt-y': tilt.y,
        '--pointer-x': `${pointer.x.toFixed(2)}%`,
        '--pointer-y': `${pointer.y.toFixed(2)}%`,
      } as React.CSSProperties}
    >
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 hero-grid-pattern opacity-[0.45] pointer-events-none z-0"
        aria-hidden="true"
      />
      
      <HeroCanvas />
      
      {/* Ambient Glow Effects */}
      <div 
        className="absolute z-[2] blur-[30px] rounded-full w-[380px] h-[380px] animate-hero-pulse"
        style={{ 
          bottom: '18%', 
          left: '58%',
          background: 'radial-gradient(circle, rgba(123, 184, 168, 0.22) 0%, rgba(123, 184, 168, 0) 72%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute z-[2] blur-[30px] rounded-full w-[320px] h-[320px] animate-hero-pulse-reverse"
        style={{ 
          top: '4%', 
          left: '6%',
          background: 'radial-gradient(circle, rgba(214, 160, 107, 0.16) 0%, rgba(214, 160, 107, 0) 72%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-[3] w-[min(calc(100%-40px),1180px)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          {/* Hero Copy */}
          <div className="relative z-[4]">
            <p className="m-0 mb-3.5 text-teal uppercase text-[0.8rem] font-bold tracking-[0.08em]">
              {profile.name}
            </p>
            <p className="m-0 mb-[18px] text-base">{profile.role}</p>
            
            <h1 className="hero-title-gradient max-w-[12ch] mb-[18px] text-[2.4rem] md:text-[3.5rem] leading-none font-bold">
              {profile.heroTitle}
            </h1>
            
            <p className="max-w-[62ch] text-base leading-[1.75] text-text-muted">
              {profile.heroIntro}
            </p>
            
            <div className="flex flex-wrap gap-3 mt-5">
              <a 
                href="#work" 
                className="inline-flex items-center justify-center min-h-[46px] px-[18px] rounded-full bg-text text-[#111315] font-semibold border border-transparent hover:-translate-y-[1px] focus-visible:-translate-y-[1px] transition-transform"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center min-h-[46px] px-[18px] rounded-full border border-line-strong text-text bg-white/[0.02] hover:-translate-y-[1px] focus-visible:-translate-y-[1px] transition-transform"
              >
                Contact
              </a>
            </div>
            
            <div className="inline-flex items-center gap-2.5 mt-[18px] p-3 px-3.5 border border-line rounded-lg bg-white/[0.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_0_6px_rgba(123,184,168,0.12)]" />
              <span className="text-text-muted text-sm">{profile.availability}</span>
            </div>
            
            {/* Highlights Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-[22px] p-0 list-none">
              {profile.heroHighlights.map((item, index) => (
                <li 
                  key={index}
                  className={`min-h-[92px] p-4 border border-line rounded-lg bg-gradient-to-b from-white/[0.045] to-white/[0.015] backdrop-blur-[10px] leading-[1.55] animate-hero-float hero-highlight-${index + 1}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Media */}
          <div className="relative z-[4]">
            <div 
              className="relative p-7 md:px-[22px] md:pb-[34px] min-h-[360px] md:min-h-[520px]"
              style={{
                perspective: '1400px',
                transformStyle: 'preserve-3d',
                transform: `perspective(1400px) rotateX(${tilt.y * -0.24}deg) rotateY(${tilt.x * 0.34}deg)`,
                transition: 'transform 180ms ease-out'
              }}
            >
              {/* Background Layer */}
              <div 
                className="absolute rounded-[28px] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08]"
                style={{ 
                  inset: '6% 10% 18% 8%',
                  transform: 'translateZ(-6px)'
                }}
              />
              
              {/* Glow Layer */}
              <div 
                className="absolute rounded-[50%] blur-[16px]"
                style={{ 
                  inset: '18% 18% 24% 12%',
                  transform: 'translateZ(-12px)',
                  background: `radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(123, 184, 168, 0.2) 0%, rgba(123, 184, 168, 0.04) 26%, rgba(123, 184, 168, 0) 65%)`
                }}
              />
              
              {/* Rings */}
              <div className="absolute inset-0 pointer-events-none z-[1]">
                <span 
                  className="absolute rounded-full border border-white/[0.1] shadow-[inset_0_0_0_1px_rgba(244,239,230,0.02)] animate-orbit"
                  style={{ inset: '6% 6% 12% 12%' }}
                />
                <span 
                  className="absolute rounded-full border border-amber/[0.14] shadow-[inset_0_0_0_1px_rgba(244,239,230,0.02)] animate-orbit-reverse"
                  style={{ inset: '14% 18% 22% 2%' }}
                />
                <span 
                  className="absolute rounded-full border border-dashed border-teal/[0.18] animate-ring-pulse"
                  style={{ inset: '20% 4% 8% 24%' }}
                />
              </div>
              
              {/* Signal Badges */}
              {profile.heroSignals.map((signal, index) => (
                <div
                  key={signal}
                  className={`absolute z-[5] inline-flex items-center min-h-[38px] px-3.5 rounded-full text-text text-[0.82rem] font-bold tracking-[0.02em] bg-bg/[0.72] backdrop-blur-[14px] border border-white/[0.12] shadow-[0_18px_36px_rgba(0,0,0,0.22)] animate-badge-drift badge-delay-${index + 1}`}
                  style={{
                    ...(index === 0 && { top: '7%', left: '-4%' }),
                    ...(index === 1 && { top: '14%', right: '4%' }),
                    ...(index === 2 && { bottom: '20%', left: '-6%' }),
                    ...(index === 3 && { bottom: '9%', right: '12%' }),
                  }}
                >
                  <span className="w-2 h-2 mr-2.5 rounded-full bg-teal shadow-[0_0_0_7px_rgba(123,184,168,0.12)]" />
                  {signal}
                </div>
              ))}
              
              {/* Stat Cards */}
              {profile.heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`absolute z-[6] min-w-[128px] md:min-w-[158px] p-3 md:p-4 md:pb-[15px] rounded-2xl bg-bg/[0.72] backdrop-blur-[14px] border border-white/[0.12] shadow-[0_18px_36px_rgba(0,0,0,0.22)] animate-stat-lift stat-delay-${index + 1}`}
                  style={{
                    ...(index === 0 && { top: '30%', right: '5%' }),
                    ...(index === 1 && { bottom: '18%', left: '10%' }),
                    ...(index === 2 && { bottom: '4%', right: '3%' }),
                  }}
                >
                  <span className="block mb-1.5 text-text-muted text-[0.78rem] tracking-[0.04em] uppercase">
                    {stat.label}
                  </span>
                  <strong className="block text-base leading-[1.25]">{stat.value}</strong>
                </div>
              ))}
              
              {/* Main Image */}
              {/* <img
                src="assets/hero-workspace.png"
                alt="Stylized digital workspace with layered product and design panels"
                className="relative z-[4] rounded-lg border border-white/[0.14] shadow-[0_22px_44px_rgba(0,0,0,0.25),0_0_0_1px_rgba(244,239,230,0.04),0_24px_70px_rgba(0,0,0,0.36)] aspect-[1.17/1] object-cover"
                style={{
                  transform: `translate3d(${tilt.x * -0.7}px, ${tilt.y * -0.7}px, 30px) rotateX(${tilt.y * -0.12}deg) rotateY(${tilt.x * 0.16}deg)`,
                  transition: 'transform 180ms ease-out'
                }}
              /> */}
            </div>
            
            <p className="max-w-[36ch] mt-3.5 text-[0.94rem] leading-[1.6] text-text-muted">
              Full-stack portfolio built around real projects, production-style dashboards, and the stack I work with most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
