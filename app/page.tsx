import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BigStatement from "@/components/BigStatement";
import Problem from "@/components/Problem";
import Products from "@/components/Products";
import Architecture from "@/components/Architecture";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
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
        <Products />
        <Architecture />
        <Benefits />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
