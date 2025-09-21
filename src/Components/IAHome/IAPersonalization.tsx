export default function IAPersonalization() {
    return (
        <div className="px-6 md:px-70 mt-50">
            <h1 className="text-4xl font-bold text-center text-white mb-12">
                Personalización de un Motor de Inteligencia Artificial
            </h1>

            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
                {/* Imagen de referencia */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://i.pinimg.com/1200x/b8/92/35/b8923514cad5a05ae587e730691094f2.jpg"
                        className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                        alt="Animación de inteligencia artificial"
                    />
                </div>

                {/* Texto descriptivo */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                    <p className="text-md font-light leading-relaxed mb-4">
                        Los motores de inteligencia artificial avanzan cada día más, y hoy en día cualquier persona puede acceder a uno de uso público.
                        Sin embargo, lo que realmente marca la diferencia es contar con un motor de IA propio, personalizado con la información,
                        los datos y los procesos de tu organización.
                    </p>

                    <p className="text-md font-light leading-relaxed">
                        En <span className="font-semibold">ArcovXr</span> desarrollamos soluciones de IA adaptadas a las necesidades específicas de cada empresa,
                        integrando la tecnología con tus plataformas internas para optimizar tus procesos y potenciar tus resultados.
                    </p>
                </div>
            </div>
        </div>
    );
}
