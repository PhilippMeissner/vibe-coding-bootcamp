export default function Welcome() {
  return (
    <div className="text-center">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F0D898] mb-4"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.65)" }}
      >
        Gilmore Girls approved
      </p>
      <div className="accent-bar mx-auto mb-6" />
      <h1
        className="text-5xl md:text-7xl font-bold tracking-tight font-serif text-[#FBF0DC]"
        style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)" }}
      >
        Hallo Du
      </h1>
      <p
        className="mt-4 text-lg md:text-xl text-[#E8D5B0] font-normal"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.65)" }}
      >
        Willkommen beim Kurs
      </p>
      <div className="accent-bar mx-auto mt-6" />
    </div>
  );
}
