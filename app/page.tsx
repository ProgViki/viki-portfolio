import Navbar from "@/components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Competencies from "./sections/Competencies";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "@/components/layout/Footer";


export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">

        {/* Hero */}
        <Hero />

        {/* Authority */}
        <About />

        {/* Technology Stack */}
        <TechStack />

        {/* Skills & Expertise */}
        <Competencies />

        {/* Portfolio */}
        <Projects />

        {/* Proof of Work */}
        {/* <CaseStudies /> */}

        {/* Services */}
        {/* <Services /> */}

        {/* Social Proof */}
        <Testimonials />

        {/* Content Marketing */}
        {/* <Blog /> */}

        {/* Lead Generation */}
        {/* <LeadMagnet /> */}

        {/* Contact */}
        <Contact />
        
      </main>

      <Footer />
    </>
  );
}