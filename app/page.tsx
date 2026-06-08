"use client";

import Welcome from "@/components/Welcome";
import ShimmerQuote from "@/components/ShimmerQuote";
import BootcampFooter from "@/components/BootcampFooter";
import confetti from "canvas-confetti";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO;

  const handleKonfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
        {motto ? <ShimmerQuote text={motto} /> : <Welcome />}

        <button
          onClick={handleKonfetti}
          className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full text-lg shadow-lg transition"
        >
          🎉 Konfetti!
        </button>
      </div>

      <BootcampFooter />
    </main>
  );
}