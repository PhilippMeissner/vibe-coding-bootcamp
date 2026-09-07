export default function BootcampFooter() {
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;

  if (!adresse) return;

  return (
    <footer className="w-full border-t border-white/15 bg-black/25 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto py-8 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
          Impressum
        </p>

        <p className="text-sm text-white/75">{adresse}</p>
      </div>
    </footer>
  );
}
