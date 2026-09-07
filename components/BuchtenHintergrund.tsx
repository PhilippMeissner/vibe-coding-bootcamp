"use client";

import { useEffect, useState } from "react";
import { BUCHTEN } from "@/lib/buchten";

/** Wie lange eine Bucht zu sehen ist, bevor die nächste eingeblendet wird. */
const WECHSEL_MS = 9000;
/** Dauer der Überblendung. Bild und Bildnachweis nutzen denselben Wert. */
const BLENDE_MS = 2500;

export default function BuchtenHintergrund() {
  const [aktiv, setAktiv] = useState(0);

  useEffect(() => {
    // Wer "reduzierte Bewegung" eingestellt hat, bekommt ein Standbild.
    const reduziert = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduziert.matches) return;

    const timer = setInterval(
      () => setAktiv((i) => (i + 1) % BUCHTEN.length),
      WECHSEL_MS
    );
    return () => clearInterval(timer);
  }, []);

  const blende = {
    transitionProperty: "opacity",
    transitionDuration: `${BLENDE_MS}ms`,
    transitionTimingFunction: "ease-in-out",
  } as const;

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[#0B2A3A]" aria-hidden="true">
        {BUCHTEN.map((b, i) => (
          <div
            key={b.bild}
            className="absolute inset-0 bg-cover bg-center motion-safe:animate-[kenburns_24s_ease-in-out_infinite_alternate]"
            style={{
              ...blende,
              backgroundImage: `url(${b.bild})`,
              opacity: i === aktiv ? 1 : 0,
            }}
          />
        ))}

        {/* Abdunklung, damit Text auf jedem Foto lesbar bleibt */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      </div>

      {/* Bildnachweis — bei CC-Lizenzen Pflicht.
          Alle Nachweise liegen übereinander und blenden im selben Takt wie
          die Fotos, damit Text und Bild nie auseinanderlaufen. */}
      <div className="relative px-4 pb-4 text-[11px] leading-snug text-white/70 sm:px-6">
        {BUCHTEN.map((b, i) => (
          <div
            key={b.bild}
            aria-hidden={i !== aktiv}
            className={i === aktiv ? "" : "pointer-events-none absolute inset-x-4 top-0 sm:inset-x-6"}
            style={{ ...blende, opacity: i === aktiv ? 1 : 0 }}
          >
            <span className="font-semibold text-white/90">{b.name}</span>
            <span className="mx-1.5 text-white/40">·</span>
            <span>{b.ort}</span>
            <br />
            <span className="text-white/55">
              Foto:{" "}
              <a
                href={b.quelle}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                {b.autor}
              </a>{" "}
              /{" "}
              <a
                href={b.lizenzUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white"
              >
                {b.lizenz}
              </a>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
