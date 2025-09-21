export default function SpaceInteraction() {
  return (
    <div className="px-6 md:px-70 mt-50">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Interacción con el Espacio
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-md font-light leading-relaxed mb-4">
            El modelado de espacios puede llevar a la necesidad de interactuar con ellos. 
            En ArcovXR diseñamos experiencias inmersivas donde los usuarios pueden 
            recorrer, observar y manipular el entorno virtual de forma natural e intuitiva.
          </p>
          <p className="text-md font-light leading-relaxed">
            Mediante dispositivos de realidad virtual (VR) o la integración de avatares 3D, 
            los usuarios pueden moverse libremente, activar elementos, y vivir una experiencia 
            interactiva totalmente personalizada.
          </p>
        </div>

        {/* Imagen del modelo 3D */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/d1/9a/31/d19a31202a640626767e956aeb8b21a3.jpg"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 "
          />
        </div>
      </div>
    </div>
  );
}
