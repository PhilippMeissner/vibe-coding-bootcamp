import Link from "next/link";
import Welcome from "@/components/Welcome";
import ShimmerQuote from "@/components/ShimmerQuote";
import BootcampFooter from "@/components/BootcampFooter";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO;

  return (
    <main className="min-h-screen flex flex-col">
      <Link href="/corp-slug/" className="flex-1 flex flex-col items-center justify-center px-6 cursor-pointer group">
        <div className="flex items-center justify-center">
          {motto ? <ShimmerQuote text={motto} /> : <Welcome />}
        </div>
        <p className="mt-8 text-sm tracking-widest uppercase opacity-30 group-hover:opacity-70 transition-opacity">
          click to play
        </p>
      </Link>

      <BootcampFooter />
    </main>
  );
}
