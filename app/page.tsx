import Intro from "@/components/Intro";
import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Stats from "@/components/Stats";
import ContactMe from "@/components/ContactMe";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between scroll-mt-[100rem]">
      <Intro />
      <SectionDivider />
      <About />
      <Stats />
      <Projects />
      <Skills />
      <Experience />
      <ContactMe />
    </main>
  );
}
