export default function IAAutomatization() {
    return (
        <div className="px-6 md:px-70 mt-50">
            <h1 className="text-4xl font-bold text-center text-white mb-12">
                Automatización de Procesos con IA
            </h1>

            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
                {/* Texto descriptivo */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                    <p className="text-md font-light leading-relaxed mb-4">
                        Actualmente, muchas tareas repetitivas que antes representaban un trabajo tedioso y elevados costos en mano de obra
                        pueden ser ejecutadas de forma automática mediante software especializado. 
                        Al integrar estas soluciones con inteligencia artificial, es posible reducir tiempos, costos y errores humanos.
                    </p>

                    <p className="text-md font-light leading-relaxed">
                        En <span className="font-semibold">ArcovXr</span> desarrollamos software personalizado que permite a las empresas
                        automatizar sus procesos, optimizando recursos y aumentando su eficiencia operativa.
                    </p>
                </div>

                {/* Imagen de referencia */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://i.pinimg.com/1200x/6a/d0/5f/6ad05f629c8d73e467d1065e060239c3.jpg"
                        alt="Representación de automatización con IA"
                        className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    );
}
