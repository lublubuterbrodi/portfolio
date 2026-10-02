import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Sections from "@/app/components/Sections";
import Contact from "@/app/components/Contact";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Sections />
      <Contact />
    </>
  );
}
