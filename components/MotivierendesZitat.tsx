"use client";

import { useEffect, useState } from "react";
import ShimmerQuote from "@/components/ShimmerQuote";
import { ZITATE } from "@/lib/zitate";

/** Passend zum Bildwechsel im Hintergrund. */
const WECHSEL_MS = 9000;

export default function MotivierendesZitat({ motto }: { motto?: string }) {
  // Dein eigenes Motto steht vorne, danach kommen die Standard-Zitate.
  const zitate = motto ? [motto, ...ZITATE.filter((z) => z !== motto)] : ZITATE;

  const [aktiv, setAktiv] = useState(0);
  const [sichtbar, setSichtbar] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      // Erst ausblenden, dann Text tauschen, dann wieder einblenden.
      setSichtbar(false);
      setTimeout(() => {
        setAktiv((i) => (i + 1) % zitate.length);
        setSichtbar(true);
      }, 700);
    }, WECHSEL_MS);

    return () => clearInterval(timer);
  }, [zitate.length]);

  return (
    <div
      className={`transition-opacity duration-700 ${
        sichtbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <ShimmerQuote text={zitate[aktiv]} />
    </div>
  );
}
