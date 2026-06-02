export default function BootcampFooter() {
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;

  if (!adresse) return;

  return (
    <footer className="w-full border-t-0 bg-transparent">
      <div className="max-w-3xl mx-auto py-6 px-6 text-center">
        <p className="text-[8px] font-semibold uppercase tracking-widest text-current opacity-75 mb-2">
          Impressum
        </p>

        {/* Hier haben wir die Adresse von text-sm auf text-xs verkleinert */}
        {/* 'text-current opacity-80' sorgt dafür, dass sie dein P3-Gelb nutzt, nur minimal dezenter */}
        <p className="text-[7px] text-current">{adresse}</p>
      </div>
    </footer>
  );
}
