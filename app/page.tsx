import Navbar from "@/components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About/About";
import Services from "./sections/Services/Services";
import Competencies from "./sections/Competencies/Competencies";
import Projects from "./sections/Projects/Projects";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact";
import Footer from "@/components/layout/Footer";
import TechStack from "./sections/TechStack";


export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* <main className="overflow-x-hidden"> */}
      <main>

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
        <Services />

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