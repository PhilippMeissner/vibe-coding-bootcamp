export default function BootcampFooter() {
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;

  if (!adresse) return;

  return (
    <footer
      className="w-full border-t border-[#3A2410] bg-[#1C0E06]/50 backdrop-blur-sm"
      style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 28%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 28%)" }}
    >
      <div className="max-w-3xl mx-auto py-8 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A876] mb-3">
          Impressum
        </p>

        <p className="text-sm text-[#E8D5B0]">{adresse}</p>
      </div>
    </footer>
  );
}
