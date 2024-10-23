import './App.css'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Proyects from './sections/Projects/Proyects'
import LiveProyects from './sections/LiveProjects/LiveProyects'
import Skills from './sections/Skills/Skills'

function App() {

  return (
    <>
      <Hero/>
      <LiveProyects/>
      <Proyects/>
      <Skills/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
