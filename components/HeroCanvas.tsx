'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef({ x: 0, y: 0 });
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const createParticles = useCallback((width: number, height: number) => {
    const colors = ['123,184,168', '214,160,107', '217,122,97', '244,239,230'];
    const count = Math.max(18, Math.min(38, Math.round(width / 42)));
    
    particlesRef.current = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.92,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.18,
      radius: 1 + Math.random() * 2.6,
      alpha: 0.25 + Math.random() * 0.45,
      color: colors[index % colors.length]
    }));
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    
    dimensionsRef.current = { width, height };
    pointerRef.current = { x: width * 0.74, y: height * 0.32 };
    
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }
    
    createParticles(width, height);
  }, [createParticles]);

  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const { width, height } = dimensionsRef.current;
    const pointer = pointerRef.current;
    
    ctx.clearRect(0, 0, width, height);
    
    // Draw glow gradient
    const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, width * 0.32);
    glow.addColorStop(0, 'rgba(123,184,168,0.18)');
    glow.addColorStop(0.28, 'rgba(123,184,168,0.06)');
    glow.addColorStop(0.62, 'rgba(214,160,107,0.04)');
    glow.addColorStop(1, 'rgba(16,18,20,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
    
    // Update particles
    particlesRef.current.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < -20) particle.x = width + 20;
      else if (particle.x > width + 20) particle.x = -20;
      
      if (particle.y < -20) particle.y = height + 20;
      else if (particle.y > height + 20) particle.y = -20;
    });
    
    // Draw connections and particles
    for (let i = 0; i < particlesRef.current.length; i++) {
      const particle = particlesRef.current[i];
      
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const other = particlesRef.current[j];
        const deltaX = particle.x - other.x;
        const deltaY = particle.y - other.y;
        const distance = Math.hypot(deltaX, deltaY);
        
        if (distance < 140) {
          const alpha = (1 - distance / 140) * 0.16;
          ctx.strokeStyle = `rgba(${particle.color}, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
      
      ctx.beginPath();
      ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha.toFixed(3)})`;
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    
    animationFrameRef.current = window.requestAnimationFrame(drawFrame);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    resizeCanvas();
    
    if (!reduceMotion) {
      drawFrame();
    }
    
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [resizeCanvas, drawFrame]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-[1] opacity-90"
        aria-hidden="true"
      />
    </div>
  );
}
