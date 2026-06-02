import React from "react";

type LeafShape = "oval" | "round" | "maple";

interface LeafConfig {
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
  shape: LeafShape;
  sway: 1 | 2 | 3 | 4;
}

const LEAF_PATHS: Record<LeafShape, string> = {
  oval:  "M 0,-13 C 4,-11 8,-5 9,0 C 9,6 6,11 3,12 C 1,13 -1,13 -3,12 C -6,11 -9,6 -9,0 C -9,-5 -4,-11 0,-13 Z",
  round: "M 0,-11 C 7,-8 11,-2 11,3 C 11,9 7,13 0,13 C -7,13 -11,9 -11,3 C -11,-2 -7,-8 0,-11 Z",
  maple: "M 0,-13 C -0.5,-10 -0.5,-8 -2,-6 L -6,-9 C -5.5,-6.5 -4.5,-5 -4.5,-2.5 L -11,-2 C -8.5,-0.5 -7,0.5 -6,2.5 L -7.5,8 C -4.5,5.5 -2.5,6.5 -1,8.5 L 0,13 L 1,8.5 C 2.5,6.5 4.5,5.5 7.5,8 L 6,2.5 C 7,0.5 8.5,-0.5 11,-2 L 4.5,-2.5 C 4.5,-5 5.5,-6.5 6,-9 L 2,-6 C 0.5,-8 0.5,-10 0,-13 Z",
};

const LEAVES: LeafConfig[] = [
  { left:  "3%", size: 58, duration: 13, delay:  -2.0, color: "#C4511A", shape: "maple", sway: 1 },
  { left:  "8%", size: 44, duration: 10, delay:  -4.2, color: "#D4873A", shape: "oval",  sway: 3 },
  { left: "15%", size: 64, duration: 15, delay:  -1.2, color: "#E8A520", shape: "round", sway: 2 },
  { left: "22%", size: 48, duration: 11, delay:  -7.4, color: "#8B2E00", shape: "oval",  sway: 4 },
  { left: "28%", size: 54, duration: 14, delay:  -4.3, color: "#C4511A", shape: "maple", sway: 1 },
  { left: "35%", size: 38, duration:  9, delay:  -7.7, color: "#2D5A1B", shape: "round", sway: 3 },
  { left: "42%", size: 70, duration: 16, delay:  -8.5, color: "#D4873A", shape: "oval",  sway: 2 },
  { left: "50%", size: 50, duration: 12, delay:  -2.6, color: "#E8A520", shape: "maple", sway: 4 },
  { left: "57%", size: 56, duration: 11, delay:  -8.1, color: "#A83010", shape: "round", sway: 1 },
  { left: "63%", size: 42, duration: 14, delay:  -6.3, color: "#C4511A", shape: "oval",  sway: 3 },
  { left: "70%", size: 60, duration: 10, delay:  -1.2, color: "#D4873A", shape: "maple", sway: 2 },
  { left: "76%", size: 72, duration: 17, delay: -15.0, color: "#2D5A1B", shape: "oval",  sway: 4 },
  { left: "83%", size: 46, duration: 13, delay:  -4.8, color: "#E8A520", shape: "round", sway: 1 },
  { left: "90%", size: 54, duration: 11, delay:  -6.7, color: "#8B2E00", shape: "maple", sway: 3 },
  { left: "96%", size: 40, duration:  9, delay:  -8.4, color: "#C4511A", shape: "oval",  sway: 2 },
  { left: "10%", size: 50, duration: 14, delay:  -3.9, color: "#D4873A", shape: "maple", sway: 4 },
  { left: "25%", size: 66, duration: 12, delay:  -6.6, color: "#E8A520", shape: "round", sway: 1 },
  { left: "48%", size: 44, duration: 10, delay:  -7.9, color: "#A83010", shape: "oval",  sway: 2 },
  { left: "67%", size: 56, duration: 15, delay:  -2.7, color: "#C4511A", shape: "maple", sway: 3 },
  { left: "88%", size: 62, duration: 13, delay:  -8.5, color: "#2D5A1B", shape: "round", sway: 4 },
  // zweite Welle
  { left:  "6%", size: 52, duration: 11, delay:  -4.4, color: "#E8A520", shape: "oval",  sway: 2 },
  { left: "13%", size: 68, duration: 14, delay: -10.1, color: "#C4511A", shape: "round", sway: 4 },
  { left: "19%", size: 46, duration:  9, delay:  -0.5, color: "#D4873A", shape: "maple", sway: 1 },
  { left: "31%", size: 60, duration: 16, delay:  -9.3, color: "#8B2E00", shape: "round", sway: 3 },
  { left: "38%", size: 42, duration: 12, delay: -10.0, color: "#2D5A1B", shape: "oval",  sway: 2 },
  { left: "45%", size: 74, duration: 15, delay:  -3.8, color: "#C4511A", shape: "maple", sway: 4 },
  { left: "53%", size: 48, duration: 10, delay:  -4.7, color: "#E8A520", shape: "oval",  sway: 1 },
  { left: "59%", size: 58, duration: 13, delay: -11.8, color: "#D4873A", shape: "round", sway: 3 },
  { left: "72%", size: 40, duration: 11, delay:  -3.7, color: "#A83010", shape: "maple", sway: 2 },
  { left: "79%", size: 64, duration: 14, delay:  -9.5, color: "#C4511A", shape: "oval",  sway: 4 },
  { left: "85%", size: 50, duration:  9, delay:  -1.3, color: "#2D5A1B", shape: "maple", sway: 1 },
  { left: "93%", size: 44, duration: 16, delay: -12.2, color: "#E8A520", shape: "round", sway: 3 },
  // dritte Welle (dichtere Füllung)
  { left:  "1%", size: 46, duration: 12, delay:  -6.2, color: "#D4873A", shape: "round", sway: 2 },
  { left: "17%", size: 56, duration: 10, delay:  -8.9, color: "#8B2E00", shape: "maple", sway: 4 },
  { left: "33%", size: 62, duration: 13, delay:  -3.0, color: "#C4511A", shape: "oval",  sway: 1 },
  { left: "44%", size: 38, duration: 15, delay:  -6.6, color: "#E8A520", shape: "maple", sway: 3 },
  { left: "55%", size: 70, duration: 11, delay:  -7.7, color: "#A83010", shape: "round", sway: 2 },
  { left: "64%", size: 48, duration: 14, delay:  -1.3, color: "#2D5A1B", shape: "oval",  sway: 4 },
  { left: "74%", size: 54, duration:  9, delay:  -5.5, color: "#D4873A", shape: "maple", sway: 1 },
  { left: "82%", size: 66, duration: 16, delay:  -6.1, color: "#C4511A", shape: "round", sway: 3 },
  { left: "94%", size: 42, duration: 12, delay:  -9.8, color: "#E8A520", shape: "oval",  sway: 2 },
];

const FIXED: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  overflow: "hidden",
  pointerEvents: "none",
};

export default function AutumnBackground() {
  return (
    <>
      {/* Hintergrundbild — hinter dem Content */}
      <div
        aria-hidden="true"
        style={{
          ...FIXED,
          zIndex: 1,
          backgroundImage: "url('/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Blätter — vor dem Content */}
      <div aria-hidden="true" style={{ ...FIXED, zIndex: 20 }}>
      {LEAVES.map((leaf, i) => (
        <svg
          key={i}
          viewBox="-16 -16 32 32"
          width={leaf.size}
          height={leaf.size}
          style={{
            position: "absolute",
            left: leaf.left,
            top: 0,
            animation: `leaf-fall-${leaf.sway} ${leaf.duration}s ${leaf.delay}s infinite ease-in-out`,
            willChange: "transform, opacity",
            pointerEvents: "none",
          }}
        >
          <path d={LEAF_PATHS[leaf.shape]} fill={leaf.color} opacity={0.84} />
          <line
            x1="0" y1="-10" x2="0" y2="11"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.7"
          />
          <line
            x1="0" y1="13" x2="0" y2="15"
            stroke={leaf.color}
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity={0.7}
          />
        </svg>
      ))}
      </div>
    </>
  );
}
