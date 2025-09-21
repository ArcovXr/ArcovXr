export default function SpaceRendering () {
  return (
    <div className="px-6 md:px-70 mt-50">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Renderizado
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-md font-light leading-relaxed mb-4">
            El proceso de renderizado consiste en transformar un modelo 3D en imágenes o videos 
            de alta fidelidad que representen de manera realista su apariencia final. 
            A través de softwares especializados, aplicamos texturas, iluminación avanzada, materiales 
            y efectos visuales que permiten recrear cómo lucirá un espacio incluso antes de ser construido.
          </p>
          <p className="text-md font-light leading-relaxed">
            En ArcovXR nos especializamos en ofrecer un renderizado de calidad cinematográfica, 
            ideal para presentaciones profesionales, propuestas arquitectónicas y experiencias inmersivas. 
            De esta forma, nuestros clientes pueden visualizar con precisión cada detalle de sus proyectos, 
            generando un mayor impacto visual y facilitando la toma de decisiones.
          </p>
        </div>

        {/* Imagen del modelo 3D */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/cc/77/63/cc77637b12784e4f797edfc7113c36b8.jpg"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}
