export default function IAVrImplementation () {
  return (
    <div className="px-6 md:px-70 mt-50">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Asistentes Virtuales en Experiencias VR
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
        {/* Imagen de referencia */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/a9/7a/26/a97a267a74cc3397ec0664278b2963f6.jpg"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-md font-light leading-relaxed mb-4">
            En <strong>ArcovXR</strong> llevamos las experiencias VR más allá de lo visual, 
            integrando <strong>asistentes virtuales impulsados por inteligencia artificial</strong> 
            que actúan como guías personalizados dentro de los entornos virtuales.
          </p>
          <p className="text-md font-light leading-relaxed">
            Estos asistentes pueden ser diseñados y configurados según la identidad de tu marca o proyecto, 
            y entrenados con la información específica que desees proporcionar. De esta forma, pueden responder 
            preguntas en tiempo real, ofrecer recorridos guiados, explicar el funcionamiento de elementos interactivos 
            y brindar soporte inmediato durante toda la experiencia VR, mejorando significativamente la 
            <strong>interacción, el aprendizaje y el engagement de los usuarios</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
