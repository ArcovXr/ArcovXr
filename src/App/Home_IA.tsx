import { useEffect } from "react";
import './App.css'
import Footer from '../Components/Global/Footer'
import Header from "../Components/Global/Header";
import IABanner from "../Components/IAHome/IABanner";
import IAIntroduction from "../Components/IAHome/IAIntroduction";
import IAVrImplementation from "../Components/IAHome/IAVrImplementation";
import IAMixImplementation from "../Components/IAHome/IAmixImplementetion";
import IAPersonalization from "../Components/IAHome/IAPersonalization";
import IAAutomatization from "../Components/IAHome/IAAutomatization";

function HomeIA() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, []);

  return (
    <>
      <Header />
      <div>
        <IABanner/>
        <IAIntroduction/>
        <IAVrImplementation/>
        <IAMixImplementation/>
        <IAPersonalization/>
        <IAAutomatization/>
        <Footer/>
      </div>      
    </>
  )
}

export default HomeIA
