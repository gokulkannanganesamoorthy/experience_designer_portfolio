import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-pure-black selection:bg-warm-metallic selection:text-pure-black">
      <Navigation />
      <Hero />
      <Footer />
    </main>
  );
}
