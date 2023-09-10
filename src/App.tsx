import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

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
    </section>
  );
};

export default App;
