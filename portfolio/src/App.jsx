import React from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from  './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Fotter from './Components/Footer/Footer'
function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
        <Fotter/>
    </div>
  )
}

export default App