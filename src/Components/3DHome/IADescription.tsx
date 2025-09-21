import Jarvis from "./Jarvis";

export default function IADescription() {
  return (
    <div className="px-6 md:px-70 mt-80">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Interfaz Inteligente 3D
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0 -mt-80">
        {/* Contenedor del modelo 3D */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="scale-30 md:scale-40 transform">
            <Jarvis />
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left md:mt-0 -mt-100">
          <h2 className="font-bold text-xl mb-4">Modelo 3D</h2>
          <p className="text-md font-thin leading-relaxed">
            Representación interactiva en tres dimensiones que puede integrarse
            en la interfaz de usuario de un sitio web. Este modelo 3D es
            adaptable a distintos contextos, como presentaciones de productos,
            demostraciones técnicas, recorridos virtuales o elementos
            decorativos que mejoran la experiencia visual del usuario. Su diseño
            responsivo permite que se visualice correctamente en dispositivos
            móviles, tabletas y computadores, garantizando una interacción
            fluida y atractiva.
          </p>
        </div>
      </div>
    </div>
  );
}
