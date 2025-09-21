import Coworking from "./Coworking";

export default function Space() {
  return (
    <div className="px-6 md:px-70 md:mt-0 mt-50">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Presentación de Espacios
      </h1>

      <div className=" md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0">
        {/* Contenedor del modelo 3D */}
        <div className=" flex justify-center">
          <div className="scale-100 md:scale-100 transform rounded-2xl overflow-hidden shadow-lg">
            <Coworking />
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className=" text-white text-center md:text-left mt-15">
          <h2 className="font-bold text-xl mb-4">Coworking Space</h2>
          <p className="text-md font-thin leading-relaxed">
            Modelo tridimensional de un espacio de coworking que permite 
            visualizar cómo se vería en un entorno digital. Este recurso puede 
            utilizarse para presentar áreas de trabajo colaborativo, mostrar 
            distribuciones arquitectónicas o brindar una experiencia inmersiva 
            en tiempo real desde cualquier dispositivo.
          </p>
        </div>
      </div>
    </div>
  );
}
