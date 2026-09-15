import Welcome from "@/components/Welcome";
import ShimmerQuote from "@/components/ShimmerQuote";
import BootcampFooter from "@/components/BootcampFooter";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO;

  return (
    <main
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-fixed relative"
      style={{ backgroundImage: "url('/natur-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" aria-hidden />

      <div className="relative flex-1 flex items-center justify-center px-6">
        {motto ? <ShimmerQuote text={motto} /> : <Welcome />}
      </div>
      <h2>Das ist ein Test meines neuen Features</h2>

      <div className="relative">
        <BootcampFooter />
      </div>
    </main>
  );
}
