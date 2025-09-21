export default function VROnboarding() {
  return (
    <div className="px-6 md:px-70 mt-50">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Aplicaciones para Onboarding
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
        {/* Imagen de referencia */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/00/09/2b/00092bc7efadab006c1adc34ec7576a7.jpg"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
            alt="Experiencia de onboarding en realidad virtual"
          />
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-md font-light leading-relaxed mb-4">
            El <span className=" font-semibold">onboarding</span> es el proceso de integración y capacitación de nuevos integrantes en una empresa u organización. 
            Tradicionalmente implica formaciones presenciales o manuales extensos, pero hoy es posible hacerlo de forma mucho más interactiva y eficiente.
            <br /><br />
            En <span className=" font-semibold">ArcovXr</span> desarrollamos aplicaciones inmersivas de realidad virtual para onboarding, 
            que permiten a los usuarios manipular modelos realistas y vivir experiencias simuladas del entorno laboral. 
            Así logramos que el aprendizaje sea práctico, seguro y cercano a la realidad.
          </p>
        </div>
      </div>
    </div>
  );
}
