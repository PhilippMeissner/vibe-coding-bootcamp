import Confetti from "./Confetti";

export default function Welcome() {
  return (
    <>
      <Confetti autoFire />

      <div className="text-center">
        <div className="accent-bar mx-auto mb-6" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A2E]">
          Hallo Du
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-500 font-normal">
          Willkommen beim Kurs
        </p>
        <div className="accent-bar mx-auto mt-6" />

        <p className="mt-10 text-sm uppercase tracking-widest text-gray-400">
          Klick irgendwo hin 🎉
        </p>
      </div>
    </>
  );
}
