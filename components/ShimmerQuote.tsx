export default function ShimmerQuote({ text }: { text: string }) {
  return (
    <div className="text-center max-w-4xl">
      <div className="accent-bar mx-auto mb-8" />
      <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight shimmer-text spin-text">
        &bdquo;{text}&ldquo;
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}
