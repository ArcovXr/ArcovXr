import Product from "./Product";

export default function ProductVisualization() {
  return (
    <div className="px-6 md:px-70 ">
      <h1 className="text-3xl font-semibold text-center mb-10 md:mt-0 mt-50">
        Visualización de Productos 3D
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0 -mt-80">
        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left md:flex flex-col hidden ">
          <h2 className="font-bold text-xl mb-4">Visualizacion 3D</h2>
          <p className="text-md font-thin leading-relaxed">
            Representación interactiva en tres dimensiones que permite explorar
            los productos con mayor detalle y realismo. Esta visualización 3D 
            en tiempo real puede integrarse fácilmente en interfaces web, 
            ofreciendo a los usuarios una experiencia inmersiva al observar 
            características, proporciones y acabados desde cualquier ángulo. 
            Su diseño responsivo asegura una visualización fluida tanto en 
            computadores como en dispositivos móviles.
          </p>
        </div>

        {/* Contenedor del modelo 3D */}
        <div className="w-full md:w-1/2 flex justify-center md:mt-0 -mt-30">
          <div className="scale-25 md:scale-30 transform rounded-2xl mx-auto shadow-lg">
            <Product />
          </div>
          
        </div>
        <div className="w-full md:w-1/2 text-white text-center md:text-left md:hidden flex-col flex md:mt-0 -mt-100">
          <h2 className="font-bold text-xl mb-4">Visualizacion 3D</h2>
          <p className="text-md font-thin leading-relaxed">
            Representación interactiva en tres dimensiones que permite explorar
            los productos con mayor detalle y realismo. Esta visualización 3D 
            en tiempo real puede integrarse fácilmente en interfaces web, 
            ofreciendo a los usuarios una experiencia inmersiva al observar 
            características, proporciones y acabados desde cualquier ángulo. 
            Su diseño responsivo asegura una visualización fluida tanto en 
            computadores como en dispositivos móviles.
          </p>
        </div>
      </div>
    </div>
  );
}
