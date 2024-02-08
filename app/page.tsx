import Intro from "@/components/Intro";
import About from "@/components/About";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
