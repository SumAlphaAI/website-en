'use client';

import React, { useEffect, useRef } from 'react';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
}

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}

export const Particles = ({ 
  className = '', 
  quantity = 30, 
  staticity = 50, 
  ease = 50 
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circlesRef = useRef<Circle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dprRef = useRef<number>(1);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current || !canvasContainerRef.current) return;

    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    contextRef.current = canvas.getContext('2d');
    dprRef.current = window.devicePixelRatio || 1;

    const initCanvas = () => {
      resizeCanvas();
      drawParticles();
    };

    const resizeCanvas = () => {
      if (!container || !canvas || !contextRef.current) return;
      circlesRef.current.length = 0;
      canvasSizeRef.current.w = container.offsetWidth;
      canvasSizeRef.current.h = container.offsetHeight;
      canvas.width = canvasSizeRef.current.w * dprRef.current;
      canvas.height = canvasSizeRef.current.h * dprRef.current;
      canvas.style.width = canvasSizeRef.current.w + 'px';
      canvas.style.height = canvasSizeRef.current.h + 'px';
      contextRef.current.scale(dprRef.current, dprRef.current);
    };

    const circleParams = (): Circle => {
      const x = Math.floor(Math.random() * canvasSizeRef.current.w);
      const y = Math.floor(Math.random() * canvasSizeRef.current.h);
      const translateX = 0;
      const translateY = 0;
      const size = Math.floor(Math.random() * 2) + 1;
      const alpha = 0;
      const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
      const dx = (Math.random() - 0.5) * 0.2;
      const dy = (Math.random() - 0.5) * 0.2;
      const magnetism = 0.1 + Math.random() * 4;
      return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism };
    };

    const drawCircle = (circle: Circle, update = false) => {
      if (!contextRef.current) return;
      const { x, y, translateX, translateY, size, alpha } = circle;
      contextRef.current.translate(translateX, translateY);
      contextRef.current.beginPath();
      contextRef.current.arc(x, y, size, 0, 2 * Math.PI);
      // Light theme: use ink particles (very subtle, Linear-ish)
      contextRef.current.fillStyle = `rgba(11, 18, 32, ${alpha * 0.18})`;
      contextRef.current.fill();
      contextRef.current.setTransform(dprRef.current, 0, 0, dprRef.current, 0, 0);
      if (!update) {
        circlesRef.current.push(circle);
      }
    };

    const clearContext = () => {
      if (!contextRef.current) return;
      contextRef.current.clearRect(0, 0, canvasSizeRef.current.w, canvasSizeRef.current.h);
    };

    const drawParticles = () => {
      clearContext();
      for (let i = 0; i < quantity; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    };

    const remapValue = (value: number, start1: number, end1: number, start2: number, end2: number) => {
      const remapped = (value - start1) * (end2 - start2) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    };

    const animate = () => {
      clearContext();
      circlesRef.current.forEach((circle: Circle, i: number) => {
        // Handle the alpha value
        const edge = [
          circle.x + circle.translateX - circle.size, // distance from left edge
          canvasSizeRef.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
          circle.y + circle.translateY - circle.size, // distance from top edge
          canvasSizeRef.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }
        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.translateX += ((mouseRef.current.x / (staticity / circle.magnetism)) - circle.translateX) / ease;
        circle.translateY += ((mouseRef.current.y / (staticity / circle.magnetism)) - circle.translateY) / ease;
        
        // circle gets out of the canvas
        if (circle.x < -circle.size || circle.x > canvasSizeRef.current.w + circle.size || circle.y < -circle.size || circle.y > canvasSizeRef.current.h + circle.size) {
          // remove the circle from the array
          circlesRef.current.splice(i, 1);
          // create a new circle
          const newCircle = circleParams();
          drawCircle(newCircle);
          // update the circle position
        } else {
          drawCircle({ ...circle, x: circle.x, y: circle.y, translateX: circle.translateX, translateY: circle.translateY, alpha: circle.alpha }, true);
        }
      });
      rafIdRef.current = window.requestAnimationFrame(animate);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSizeRef.current;
      const x = event.clientX - rect.left - (w / 2);
      const y = event.clientY - rect.top - (h / 2);
      const inside = x < (w / 2) && x > -(w / 2) && y < (h / 2) && y > -(h / 2);
      if (inside) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      }
    };

    const onResize = () => {
      initCanvas();
    };

    initCanvas();
    animate();

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.cancelAnimationFrame(rafIdRef.current);
    };
  }, [quantity, staticity, ease]);

  return (
    <div ref={canvasContainerRef} className={`absolute inset-0 -z-10 ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
