/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

interface BackgroundParticlesProps {
  isDarkMode: boolean;
}

export default function BackgroundParticles({ isDarkMode }: BackgroundParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(window.innerWidth / 20), 60);
      const colorChoices = isDarkMode
        ? ['rgba(92, 6, 18, 0.15)', 'rgba(197, 168, 128, 0.15)', 'rgba(88, 17, 26, 0.15)']
        : ['rgba(92, 6, 18, 0.08)', 'rgba(197, 168, 128, 0.08)', 'rgba(88, 17, 26, 0.08)'];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          color: colorChoices[Math.floor(Math.random() * colorChoices.length)]
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.x + p.speedX < 0 || p.x + p.speedX > canvas.width ? -p.speedX : p.speedX;
        p.y += p.y + p.speedY < 0 || p.y + p.speedY > canvas.height ? -p.speedY : p.speedY;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect particles if close
        particles.forEach((other) => {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(197, 168, 128, ${0.08 * (1 - dist / 120)})`
              : `rgba(197, 168, 128, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      id="bg-particles-canvas"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
