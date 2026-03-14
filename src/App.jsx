import "./App.css"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Navbar />

      <section className="about-skills-container">
        <About />
        <Skills />
      </section>

      <Projects />
    </>
  )
}

export default App