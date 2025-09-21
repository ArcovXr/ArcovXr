export default function ChatIntroduction() {
    return (
        <div className="px-6 md:px-70 mt-50 md:mt-100">
            <h1 className="text-3xl font-semibold text-center text-white mb-10">
                Onboarding Dirigido por un Asistente Virtual
            </h1>

            <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0">
                <div className="text-white text-center md:text-left">
                    <p className="text-md font-light leading-relaxed">
                        En el mercado actual, el tiempo de respuesta y la eficiencia en la atención al cliente pueden marcar 
                        la diferencia entre tu empresa y tu competencia. Contar con un asistente virtual que gestione los chats, 
                        atienda a tus clientes y resuelva sus dudas sobre tus productos o servicios puede ser clave para 
                        cerrar más ventas y generar confianza.
                    </p>

                    <p className="text-md font-light leading-relaxed mt-4">
                        En <span className="font-semibold">ArcovXr</span> vamos más allá de los chatbots tradicionales 
                        con respuestas predefinidas. Desarrollamos asistentes potenciados por inteligencia artificial y 
                        entrenados con la información específica de tu empresa, capaces de integrarse con tus plataformas 
                        de e-commerce, calendarios u otros sistemas internos para brindar un servicio personalizado y eficiente.
                    </p>
                </div>
            </div>
        </div>
    );
}
