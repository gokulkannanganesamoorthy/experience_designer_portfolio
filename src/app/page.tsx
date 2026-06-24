import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Thinking from "@/components/Thinking";
import ExperienceLab from "@/components/ExperienceLab";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-pure-black selection:bg-warm-metallic selection:text-pure-black">
      <Navigation />
      <Hero />
      <About />
      <SelectedWork />
      <Thinking />
      <ExperienceLab />
      <Contact />
    </main>
  );
}
