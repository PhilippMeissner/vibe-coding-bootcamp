export default function ShimmerQuote({ text }: { text: string }) {
  return (
    <div className="text-center max-w-4xl">
      <div className="accent-bar mx-auto mb-8" />
      <p className="font-bold leading-tight shimmer-text">
        {text}
      </p>
      <div className="accent-bar mx-auto mt-8" />
    </div>
  );
}
