import Welcome from "@/components/Welcome";
import ShimmerQuote from "@/components/ShimmerQuote";
import BootcampFooter from "@/components/BootcampFooter";

export default function Home() {
  const motto = process.env.NEXT_PUBLIC_MOTTO;

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <>
  {motto ? <ShimmerQuote text={motto} /> : <Welcome />}

  <p className="mt-6 text-center text-gray-500">
    Wiersch Performance Consulting · KI-Manager (IHK)
  </p>
</>
      </div>

      <BootcampFooter />
    </main>
  );
}
