import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <section>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact/>
      </section>
    </section>
  );
};

export default App;
