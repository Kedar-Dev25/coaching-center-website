import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Faculty from "./components/Faculty";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MapReviewSection from "./components/MapReviewSection";
import ScrollReveal from "./components/ScrollReveal";
import MobileCTA from "./components/MobileCTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Courses />
      </ScrollReveal>

      <ScrollReveal>
        <Faculty />
      </ScrollReveal>

      <ScrollReveal>
        <Achievements />
      </ScrollReveal>

      <ScrollReveal>
        <Gallery />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <ScrollReveal>
        <MapReviewSection />
      </ScrollReveal>

      <Footer />
      <MobileCTA />
    </>
  );
}

export default App;