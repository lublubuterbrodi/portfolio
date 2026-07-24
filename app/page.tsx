import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Sections from "@/app/components/Sections";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sections />
      <Contact />
    </>
  );
}
