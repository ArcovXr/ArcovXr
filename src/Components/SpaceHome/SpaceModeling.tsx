export default function SpaceModeling() {
  return (
    <div className="px-6 md:px-70 mt-50">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Modelado de Espacios
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
        {/* Imagen de referencia */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/bb/36/cf/bb36cfd6e2beb06f5d322ec0f0647818.jpg"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-md font-light leading-relaxed mb-4">
            Ofrecemos servicios de modelado de espacios que van desde áreas reducidas
            como habitaciones, laboratorios o salas técnicas, hasta macroestructuras 
            complejas similares a edificios, campus o instalaciones industriales completas.
          </p>
          <p className="text-md font-light leading-relaxed mb-4">
            Nuestro equipo crea entornos 3D detallados y precisos para visualizaciones 
            arquitectónicas, recorridos virtuales y planificación de proyectos a gran escala.
          </p>
          <p className="text-md font-light leading-relaxed">
            Cada diseño se adapta a las necesidades específicas del cliente, asegurando 
            estética, funcionalidad y viabilidad técnica desde el concepto hasta la presentación final.
          </p>
        </div>
      </div>
    </div>
  );
}
