import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Project from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
