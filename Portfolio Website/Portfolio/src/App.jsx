import { useEffect } from 'react'
import ScrollReveal from "scrollreveal";
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  useEffect(() => {
    ScrollReveal().reveal("#about, #projects, #resume, #contact", {
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      delay: 200
    });
  }, []);

  return (
    <>
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    <Header/>
    <Hero/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
