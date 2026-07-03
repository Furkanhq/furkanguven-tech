import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Work } from "@/components/work";
import { Capabilities } from "@/components/capabilities";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <Capabilities />
      <Process />
      <Contact />
    </main>
  );
}
