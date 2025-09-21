import { useEffect } from "react";
import Header from "../Components/Global/Header";
import VrBanner from "../Components/VRHome/VRBanner";
import VRIntroduction from "../Components/VRHome/VRIntroduction";
import VROnboarding from "../Components/VRHome/VROnboarding";
import VREducation from "../Components/VRHome/VREducation";
import VRMeeting from "../Components/VRHome/VRMeeting";
import Footer from "../Components/Global/Footer";

export default function HomeVR() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, []);

  return (
    <>
      <Header />
      <div>
        <VrBanner/>
        <VRIntroduction/>
        <VROnboarding/>
        <VREducation/>
        <VRMeeting/>
        <Footer/>
      </div>      
    </>
  )
}