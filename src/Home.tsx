
import './App.css'
import Header from './Components/Header.tsx'
import Home from './Components/Home.tsx'
import About_me from './Components/About_me.tsx'
import Projects from './Components/Projecs.tsx'
import Experiences from './Components/Experiences.tsx'
import Services from './Components/Services.tsx'
import Footer from './Components/Footer.tsx'
import { useEffect } from 'react'


function Home_Main() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
      }, []);
  return (
    <div className="scroll-smooth"> 
      <Header />

      <div id="Home_Main">
        <Home />
      </div>

      <div id="services">
        <Services/>
      </div>

            <div id="projects">
        <Projects />
      </div>

      <div id="about">
        <About_me />
      </div>


      <div id="experiences">
        <Experiences />
      </div>

    
      <Footer />
    </div>
  );
}


export default Home_Main;
