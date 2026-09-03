"use client";

import { useEffect, useRef } from "react";

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  spin: number;
  color: string;
};

const COLORS = ["#E8503E", "#F97066", "#1A1A2E", "#6B7280", "#FBBF24", "#34D399"];

const GRAVITY = 0.35;
const DRAG = 0.99;

function createBurst(x: number, y: number, amount: number): Piece[] {
  return Array.from({ length: amount }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 9;

    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      size: 6 + Math.random() * 8,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  });
}

/**
 * Konfetti-Kanone: schießt bei jedem Klick auf die Seite eine Ladung Konfetti.
 * Zusätzlich gibt es einen Willkommens-Schuss, sobald `autoFire` true wird.
 */
export default function Confetti({ autoFire = false }: { autoFire?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const piecesRef = useRef<Piece[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      piecesRef.current = piecesRef.current.filter((p) => {
        p.vx *= DRAG;
        p.vy = p.vy * DRAG + GRAVITY;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();

        return p.y < canvas.height + 40;
      });

      frameRef.current = requestAnimationFrame(tick);
    };

    const handleClick = (event: MouseEvent) => {
      piecesRef.current.push(...createBurst(event.clientX, event.clientY, 60));
    };

    frameRef.current = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("click", handleClick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (!autoFire) return;

    piecesRef.current.push(
      ...createBurst(window.innerWidth * 0.5, window.innerHeight * 0.55, 120)
    );
  }, [autoFire]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
    />
  );
}
