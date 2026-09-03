"use client";

import { useEffect, useState } from "react";
import Confetti from "./Confetti";

const TYPING_SPEED_MS = 90;
const START_DELAY_MS = 400;

export default function ShimmerQuote({ text }: { text: string }) {
  const [typed, setTyped] = useState("");
  const done = typed.length === text.length;

  useEffect(() => {
    setTyped("");

    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const start = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setTyped(text.slice(0, index));

        if (index >= text.length) clearInterval(interval);
      }, TYPING_SPEED_MS);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text]);

  return (
    <>
      <Confetti autoFire={done} />

      <div className="text-center max-w-4xl">
        <div className="accent-bar mx-auto mb-8" />

        <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight shimmer-text">
          {/* Der volle Text bleibt für Screenreader lesbar, sichtbar wird nur getippt. */}
          <span className="sr-only">&bdquo;{text}&ldquo;</span>

          <span aria-hidden="true">
            &bdquo;{typed}
            <span className={done ? "typing-cursor" : undefined}>|</span>
            {done && <>&ldquo;</>}
          </span>
        </p>

        <div className="accent-bar mx-auto mt-8" />

        <p className="mt-10 text-sm uppercase tracking-widest text-gray-400">
          Klick irgendwo hin 🎉
        </p>
      </div>
    </>
  );
}
