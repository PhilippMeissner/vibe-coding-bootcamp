"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

function abfeuern() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
  });
}

export default function Konfetti() {
  useEffect(() => {
    // Beim ersten Laden sofort starten
    abfeuern();

    // Danach alle 5 Sekunden wiederholen
    const interval = setInterval(abfeuern, 5000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
