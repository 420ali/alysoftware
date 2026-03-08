import SkipToMain from "@/components/SkipToMain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <SkipToMain />
      <main id="main-content">
        <Navbar />
        <Hero />
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
