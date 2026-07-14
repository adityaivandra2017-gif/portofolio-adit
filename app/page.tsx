import { Hero } from "@/components/sections/beranda/Hero";
import { About } from "@/components/sections/tentang/About";
import { Projects } from "@/components/sections/proyek/Projects";
import { Skills } from "@/components/sections/keahlian/Skills";
import { Experience } from "@/components/sections/pengalaman/Experience";
import { Certificates } from "@/components/sections/sertifikat/Certificates";
import { Contact } from "@/components/sections/kontak/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
    </main>
  );
}
