import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BigStatement from "@/components/BigStatement";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Architecture from "@/components/Architecture";
import Modules from "@/components/Modules";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <main id="main-content">
        <Navbar />
      <Hero />
      <BigStatement />
      <Problem />
      <Solution />
      <Architecture />
      <Modules />
      <CTA />
        <Footer />
      </main>
    </>
  );
}
