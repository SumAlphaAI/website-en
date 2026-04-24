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
      className={`group relative h-full overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--panel)] p-px ${className}`}
    >
      {/* Mouse-tracked spotlight (subtle, warm) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(520px circle at var(--mouse-x) var(--mouse-y), rgba(37, 99, 235, 0.12), transparent 60%)',
        }}
      />

      <div className="relative h-full rounded-[inherit] bg-[color:var(--panel-2)]">
        {children}
      </div>
    </div>
  );
};
