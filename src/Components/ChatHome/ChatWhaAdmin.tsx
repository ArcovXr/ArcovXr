export default function ChatWhaAdmin() {
    return (
        <div className="px-6 md:px-70 mt-50">
            <h1 className="text-4xl font-bold text-center text-white mb-12">
                Chatbot Asistente para Administradores
            </h1>

            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">

                {/* Imagen de referencia */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://i.pinimg.com/736x/5f/10/8b/5f108ba50e1d36acc9e151138bfdda3f.jpg"
                        className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 opacity-80"
                        alt="Animación de inteligencia artificial"
                    />
                </div>

                {/* Texto descriptivo */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                    <p className="text-md font-light leading-relaxed mb-4">
                        Al delegar responsabilidades, uno de los mayores temores de un líder es que su equipo no alcance las metas o métricas propuestas. 
                        Por eso, muchos buscan reducir al máximo el margen de error humano y contar con herramientas que garanticen orden y eficiencia.
                    </p>
                    <p className="text-md font-light leading-relaxed">
                        En <span className="font-semibold">ArcovXr</span> desarrollamos asistentes virtuales personalizados para empresas que buscan optimizar sus procesos administrativos. 
                        Estos asistentes pueden gestionar agendas de reuniones, enviar recordatorios de compromisos, brindar información sobre inventarios en tu e-commerce, 
                        reportar el estado de tus plataformas web y mucho más, permitiendo a los administradores centrarse en la toma de decisiones estratégicas.
                    </p>
                </div>

            </div>
        </div>
    )
}
