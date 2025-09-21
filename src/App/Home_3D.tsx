import { useEffect } from "react";
import './App.css'
import Footer from '../Components/Global/Footer'
import GetinTouch from '../Components/3DHome/GetinTouch'
import Header from "../Components/Global/Header";
import IADescription from "../Components/3DHome/IADescription";
import ProductVisualization from '../Components/3DHome/ProductVisualization'
import Space from "../Components/3DHome/SpaceShowroom";
import ThreedHome from "../Components/3DHome/threedHome";

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
