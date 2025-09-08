import { useEffect } from "react";
import './App.css'
import Footer from './Components/Footer'
import GetinTouch from './Components/GetinTouch'
import Header from './Components/Header'
import IADescription from './Components/IADescription'
import ProductVisualization from './Components/ProductVisualization'
import Space from './Components/SpaceShowroom'
import ThreedHome from './Components/threedHome'

function Home3D() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, []);

  return (
    <>
      <Header />
      <div>
        <ThreedHome/>
        <IADescription/>
        <ProductVisualization/>
        <Space/>
        <GetinTouch/>
        <Footer/>
      </div>      
    </>
  )
}

export default Home3D
