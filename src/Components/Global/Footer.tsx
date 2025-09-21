import Logo_ig from "../Icons/Logo_instagram";
import Logo_mail from "../Icons/Logo_instagram copy";
import Logo_LinkedIn from "../Icons/Logo_LinkedIn";
import Logo_wha from "../Icons/Logo_whatsapp";

function Footer() {
  return (
    <div className="mt-20 bg-gradient-to-b from-black to-white py-12">
      <div className="text-4xl font-black text-center text-white animate__animated animate__fadeIn animate__delay-1s">
        Did you like it?
      </div>

      <div 
      onClick={() => window.open("https://wa.me/qr/5E4COJEFQ47SE1", '_blank')}
      
    
      className="text-xl font-bold text-center rounded-4xl   p-2 mt-10 w-50 hover:scale-110  transition-all cursor-pointer mx-auto bg-black hover:cursor-pointer  animate__animated animate__fadeIn animate__delay-2s">
        Contact us    
      </div>

      <div className="mx-auto lg:w-3/8 lg:px-0 px-10">
        <div className="flex mt-10 justify-center gap-6">
          <div className="transition-all cursor-pointer  mx-auto w-15 bg-black  hover:cursor-pointer   rounded-full p-2 animate__animated animate__fadeIn animate__delay-3s">
            <Logo_LinkedIn />
          </div>
          <div className="transition-all cursor-pointer  mx-auto w-15 bg-black  hover:cursor-pointer   rounded-full p-2 animate__animated animate__fadeIn animate__delay-4s">
            <Logo_mail />
          </div>
        </div>

        <div className="flex justify-center gap-6 lg:w-1/2 w-3/4 mx-auto pt-3 pb-20">
          <div className="transition-all cursor-pointer  mx-auto w-15 bg-black  hover:cursor-pointer   rounded-full p-2 animate__animated animate__fadeIn animate__delay-5s">
            <Logo_wha />
          </div>
          <div className="transition-all cursor-pointer  mx-auto w-15 bg-black  hover:cursor-pointer   rounded-full p-2 animate__animated animate__fadeIn animate__delay-6s">
            <Logo_ig />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
