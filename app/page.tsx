import BuchtenHintergrund from "@/components/BuchtenHintergrund";
import MallorcaWetter from "@/components/MallorcaWetter";
import MotivierendesZitat from "@/components/MotivierendesZitat";
import BootcampFooter from "@/components/BootcampFooter";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO;

  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="flex justify-end px-4 pt-4 sm:px-6 sm:pt-6">
        <MallorcaWetter />
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-16">
        <MotivierendesZitat motto={motto} />
      </div>

      {/* Zeichnet den Foto-Hintergrund (fixed) und den Bildnachweis (hier im Fluss) */}
      <BuchtenHintergrund />

      <BootcampFooter />
    </main>
  );
}
