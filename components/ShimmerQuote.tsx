"use client";

import { useEffect, useState } from "react";

export default function ShimmerQuote({ text }: { text: string }) {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    // Bei jedem neuen Text von vorne beginnen
    setCharCount(0);

    const interval = setInterval(() => {
      setCharCount((current) => {
        if (current >= text.length) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 80); // Tippgeschwindigkeit: 80ms pro Zeichen

    return () => clearInterval(interval);
  }, [text]);

  const isDone = charCount >= text.length;
  const visibleText = text.slice(0, charCount);

  return (
    <div className="text-center max-w-4xl">
      <div className="accent-bar mx-auto mb-8" />
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="shimmer-text">
          &bdquo;{visibleText}
          {isDone ? "“" : ""}
        </span>
        <span className="typewriter-cursor" aria-hidden="true">
          |
        </span>
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}
