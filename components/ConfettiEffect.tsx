'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiEffect() {
  useEffect(() => {
    console.log('✅ ConfettiEffect wurde geladen');
    const smiley = confetti.shapeFromText({ text: '😀', scalar: 3 });

    const fireConfetti = () => {
        console.log('🎉 fireConfetti wird ausgeführt');
      // Reguläres Konfetti
      confetti({
        particleCount: 100,
        spread: 100,
        startVelocity: 45,
        origin: { x: Math.random(), y: 0.6 },
        gravity: 0.9,
      });

      // Smiley-Konfetti
      confetti({
        particleCount: 15,
        spread: 90,
        origin: { x: Math.random(), y: 0 },
        gravity: 0.7,
        scalar: 2,
        shapes: [smiley],
      });
    };

    fireConfetti(); // sofort beim Laden der Seite

    const interval = setInterval(fireConfetti, 5000); // alle 5 Sekunden
    window.addEventListener('click', fireConfetti); // bei jedem Klick

    return () => {
      clearInterval(interval);
      window.removeEventListener('click', fireConfetti);
    };
  }, []);

  return null;
}