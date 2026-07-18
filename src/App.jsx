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

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Faculty />
      <Achievements />
      <Gallery />
      <Contact />
      <MapReviewSection />
      <Footer />
    </>
  );
}

export default App;