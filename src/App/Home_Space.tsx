import { useEffect } from "react";
import './App.css'
import Footer from '../Components/Global/Footer'
import Header from "../Components/Global/Header";
import SpaceBanner from "../Components/SpaceHome/SpaceBanner";
import SpaceIntroduction from "../Components/SpaceHome/SpaceIntroduction";
import SpaceModeling from "../Components/SpaceHome/SpaceModeling";
import SpaceInteraction from "../Components/SpaceHome/SpaceInteraction";
import SpaceAnimation from "../Components/SpaceHome/SpaceAnimation";
import SpaceRendering from "../Components/SpaceHome/SpaceRendering";

function HomeSpace() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, []);

  return (
    <>
      <Header />
      <div>
        <SpaceBanner/>
        <SpaceIntroduction/>
        <SpaceModeling/>
        <SpaceInteraction/>
        <SpaceAnimation/>
        <SpaceRendering/>
        <Footer/>
      </div>      
    </>
  )
}

export default HomeSpace
