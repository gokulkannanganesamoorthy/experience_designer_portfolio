import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkCanvas from "@/components/WorkCanvas";
import LinkTree from "@/components/LinkTree";

export default function Home() {
  return (
    <main className="relative w-full bg-pure-black selection:bg-warm-metallic selection:text-pure-black">
      <Navigation />
      <Hero />
      <WorkCanvas />
      <LinkTree />
    </main>
  );
}
