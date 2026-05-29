export default function BootcampFooter() {
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;

  if (!adresse) return;

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="max-w-3xl mx-auto py-8 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Impressum
        </p>

        <p className="text-sm text-gray-600">{adresse}</p>
      </div>
    </footer>
  );
}
