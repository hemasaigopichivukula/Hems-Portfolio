
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Values from "@/components/Values";
import Mentors from "@/components/Mentors";
import Beyond from "@/components/Beyond";
import Writings from "@/components/Writings";
import Gallery from "@/components/Resume";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
      <Header />
      <Navigation />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Gallery />
        <Writings />
        <Values />
        <Mentors />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
