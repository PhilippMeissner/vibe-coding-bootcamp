export default function ShimmerQuote({ text }: { text: string }) {
  return (
    <div className="text-center max-w-4xl">
      <p
        className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F0D898] mb-4"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.65)" }}
      >
        Gilmore Girls approved
      </p>
      <div className="accent-bar mx-auto mb-8" />
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif shimmer-text">
        &bdquo;{text}&ldquo;
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}
