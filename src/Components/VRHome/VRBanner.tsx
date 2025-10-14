import ArcovXrIcon from "../Icons/ArcovXrIcon";

export default function VrBanner (){
    return(
    <>
          <div>
            <img src="./src/assets/HomeVr.jpg" className="w-full absolute top-0 left-0 h-full object-cover opacity-70 object-top"/>
    
            <div className=" mx-auto w-2/3 text-left pt-32 outer_block md:mb-24 relative">
              <div className="text-gray-400 text-xl md:text-2xl">
                Bienvenidos a
              </div>
    
              <div className="text-6xl md:text-8xl font-semibold mt-6 w-2/3">
                <ArcovXrIcon/>
              </div>
    
              <div className="text-white font-light text-2xl md:text-3xl mt-6">
                Consultora en Tecnologías Emergentes
              </div>
    
              <div className="text-gray-400 mt-6 text-lg md:text-xl">
                Sección especializada en previsualización VR
              </div>
            </div>
          </div>
    
          {/* Gradiente inferior para difuminar el fondo */}
          <div className="pointer-events-none absolute -bottom-1 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black"></div>
        </>
)
}
