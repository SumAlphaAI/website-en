'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';

interface HighlighterProps {
  children: React.ReactNode;
  className?: string;
  refresh?: boolean;
}

export const Highlighter = ({ children, className = '', refresh = false }: HighlighterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    if (containerRef.current) {
      setBoxes(Array.from(containerRef.current.children) as HTMLElement[]);
    }
  }, [children, refresh]);

  const initContainer = useCallback(() => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  }, []);

  const onMouseMove = useCallback((event: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty('--mouse-x', `${boxX}px`);
          box.style.setProperty('--mouse-y', `${boxY}px`);
        });
      }
    }
  }, [boxes]);

  useEffect(() => {
    if (!containerRef.current) return;
    initContainer();
    window.addEventListener('resize', initContainer);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', initContainer);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [boxes, initContainer, onMouseMove]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export const HighlighterItem = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${className}`}
    >
      <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
        {children}
      </div>
    </div>
  );
};
