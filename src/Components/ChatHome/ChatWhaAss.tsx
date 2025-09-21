export default function ChatWhaAss() {
    return (
        <div className="px-6 md:px-70 mt-50">
            <h1 className="text-4xl font-bold text-center text-white mb-12">
                Asistentes de WhatsApp para Atención al Cliente
            </h1>

            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
                
                {/* Texto descriptivo */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                    <p className="text-md font-light leading-relaxed mb-4">
                        Tener un asistente para servicio al cliente es algo que se ha implementado desde hace años, 
                        por lo que ya no es un diferencial competitivo. Sin embargo, actualmente lo ideal no es solo 
                        contar con respuestas automáticas básicas, sino ofrecer una atención mucho más inteligente y personalizada.
                    </p>

                    <p className="text-md font-light leading-relaxed">
                        En <span className="font-semibold">ArcovXr</span> brindamos a nuestros clientes la posibilidad de manejar 
                        sus flujos de atención a través de asistentes potenciados por inteligencia artificial. 
                        Estos asistentes guían al cliente durante su proceso de consulta y compra, y pueden incluso 
                        dirigirlo con un asesor humano cuando sea necesario. Además, son entrenados específicamente 
                        con la información de tu empresa para resolver cualquier caso que se pueda presentar.
                    </p>
                </div>

                {/* Imagen de referencia */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://i.pinimg.com/736x/07/f3/26/07f3263f1a1afb7277ca8b7b878e1299.jpg"
                        alt="Asistente de WhatsApp con IA"
                        className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 opacity-50"
                    />
                </div>
            </div>
        </div>
    );
}
