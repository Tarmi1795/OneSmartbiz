import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ImmersiveScroll from "@/components/ImmersiveScroll";
import NeuralEngine from "@/components/NeuralEngine";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ImmersiveScroll />
        <NeuralEngine />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
