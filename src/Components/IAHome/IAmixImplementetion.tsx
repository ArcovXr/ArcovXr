export default function IAMixImplementation () {
  return (
    <div className="px-6 md:px-70 mt-50">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Asistentes Virtuales en Experiencias de Realidad Mixta
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-md font-light leading-relaxed mb-4">
            Seguramente has visto en películas futuristas o de acción a un asistente virtual que guía al protagonista, 
            ofreciéndole información en tiempo real mientras construye algo, resuelve problemas o estudia un nuevo tema. 
            Esa tecnología ya no es ciencia ficción: en <strong>ArcovXR</strong> hacemos que sea una realidad.
          </p>
          <p className="text-md font-light leading-relaxed">
            Implementamos <strong>asistentes virtuales potenciados por IA</strong> que funcionan dentro de experiencias de 
            <strong>realidad mixta</strong>, combinando el entorno físico con elementos virtuales interactivos. 
            Estos asistentes pueden ayudarte a ejecutar tareas complejas, darte instrucciones paso a paso, 
            mostrar información adicional en tiempo real y ofrecer soporte contextual mientras interactúas 
            con el mundo real reforzado por la realidad virtual.
          </p>
        </div>

        {/* Imagen de referencia */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/bd/e7/b1/bde7b1df71fb8da042ea8b8edb29a337.jpg"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 h-150 object-cover w-full"
          />
        </div>
      </div>
    </div>
  )
}
