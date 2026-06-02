"use client";

import { useEffect, useState } from "react";

const EMOJIS = [
  "🎉", "🎊", "🥳", "✨", "🎈", "🌟", "💥", "🎆", "🎇", "🌈",
  "💖", "💛", "💚", "💙", "💜", "❤️", "🧡", "⭐", "🔥", "🍬",
  "🎁", "🦄", "🌸", "🌻", "🍭", "💫", "🎀", "🪅",
];
const PIECES_PER_BURST = 70;

type Piece = {
  id: number;
  emoji: string;
  left: number;
  dx: number;
  dy: number;
  fall: number;
  rotate: number;
  rotateEnd: number;
  duration: number;
  delay: number;
  size: number;
};

let counter = 0;

function createBurst(): Piece[] {
  return Array.from({ length: PIECES_PER_BURST }, () => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 180 + Math.random() * 320;
    const rotate = (Math.random() - 0.5) * 720;
    return {
      id: counter++,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: 10 + Math.random() * 80,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance - 160,
      fall: 90 + Math.random() * 40,
      rotate,
      rotateEnd: rotate + (Math.random() - 0.5) * 540,
      duration: 2.8 + Math.random() * 1.4,
      delay: Math.random() * 0.15,
      size: 2.6 + Math.random() * 2.8,
    };
  });
}

export default function ConfettiFireworks() {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    const fire = () => {
      const burst = createBurst();
      setPieces((prev) => [...prev, ...burst]);
      const ids = new Set(burst.map((p) => p.id));
      window.setTimeout(() => {
        setPieces((prev) => prev.filter((p) => !ids.has(p.id)));
      }, 4500);
    };

    fire();
    const interval = window.setInterval(fire, 3000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden z-50"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-[18%] animate-confetti"
          style={
            {
              left: `${p.left}%`,
              fontSize: `${p.size}rem`,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              "--fall": `${p.fall}vh`,
              "--rot": `${p.rotate}deg`,
              "--rot-end": `${p.rotateEnd}deg`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
