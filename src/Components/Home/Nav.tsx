import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";


const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop-50,
        behavior: 'smooth',
      });
    }
  };
  


const NavLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname !== "/Home_Main") {
      // si no estoy en Home_Main, navego allá
      navigate("/Home_Main");
    } else {
      // si ya estoy en Home_Main, hago scroll a la sección
      scrollToSection("Home_Main");
    }
  };
    return (
      <>
        {/* Enlace Home */}
        <div
          className="text-md relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-cyan-400 cursor-pointer"
          onClick={handleHomeClick}
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
        </div>

        <div
          className="text-md  relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-cyan-400 cursor-pointer"
          onClick={() => scrollToSection('services')}
        >
          Servicios
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
        </div>
  

        <div
          className="text-md  relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-cyan-400 cursor-pointer"
          onClick={() => scrollToSection('projects')}
        >
          Proyectos
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
        </div>
        <div
          className="text-md  relative group transition-transform duration-300 ease-in-out hover:scale-105 hover:text-cyan-400 cursor-pointer"
          onClick={() => scrollToSection('experiences')}
        >
          Trayectoria
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all"></span>
        </div>

      </>
    );
  };
  
  
const Nav = () => {
  const [isOpen,setisOpen]=useState(false);
  const toggleNavbar=()=>{
    setisOpen(!isOpen);

  }
    return(
      <>
        <nav className="w-1/2 md:w-2/3  flex justify-end">
          <div className="hidden w-full justify-between lg:flex font-display font-light  text-lg ">
              <NavLinks />
          </div>
          <div className=" lg:hidden justify-end transition-all fill-white hover:fill-blue-500 ">
            <button onClick={toggleNavbar} className="cursor-pointer w-10">
                {isOpen ? <X/>: <Menu/>}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="lg:hidden flex flex-col items-center basis-full w-full mt-10">
            <NavLinks/>
          </div>
        )}
        </>
    );
};

export default Nav;
