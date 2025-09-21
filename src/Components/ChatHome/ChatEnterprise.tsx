import ChatBotUI from "./ChatPersonal";

export default function ChatEnterprise() {
  return (
    <div className="px-6 md:px-28 lg:px-70 mt-20 md:mt-50 text-white">
      <h1 className="text-3xl font-semibold text-center mb-10 ">
        Macrochat Institucional
      </h1>

      {/* Texto descriptivo */}
      <div className="w-full text-center md:text-left mb-12">
        <p className="text-md font-light leading-relaxed text-gray-300">
          El uso de la inteligencia artificial en el día a día se ha convertido en una realidad para el desarrollo de diferentes tareas
          cotidianas dentro de una organización. Muchas veces se generan errores por la falta de información en el asistente o por
          la ausencia de conocimiento disponible en la web sobre el tema consultado.
          <br /><br />
          Por eso, en <span className=" font-semibold">ArcovXr</span> desarrollamos asistentes virtuales con una
          experiencia de usuario personalizada para cada empresa, conectando a todos los integrantes de la organización con un motor
          entrenado con el conocimiento necesario para su contexto.
          <br /><br />
          Así, logramos maximizar los resultados y mejorar la eficiencia de todos los equipos de trabajo.
        </p>
      </div>

      {/* Chat a pantalla completa */}
      <div className="w-full">
        <ChatBotUI />
      </div>
    </div>
  );
}
