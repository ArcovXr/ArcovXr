import { useEffect } from "react";
import './App.css'
import Footer from '../Components/Global/Footer'
import Header from "../Components/Global/Header";
import ChatBanner from "../Components/ChatHome/ChatBanner";
import ChatIntroduction from "../Components/ChatHome/ChatIntroduction";
import ChatWhaAdmin from "../Components/ChatHome/ChatWhaAdmin";
import ChatWhaAss from "../Components/ChatHome/ChatWhaAss";
import ChatEnterprise from "../Components/ChatHome/ChatEnterprise";

function HomeChat() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, []);

  return (
    <>
      <Header />
      <div>
        <ChatBanner/>
        <ChatIntroduction/>
        <ChatWhaAss/>
        <ChatWhaAdmin/>
        <ChatEnterprise/>
        <Footer/>
      </div>      
    </>
  )
}

export default HomeChat
