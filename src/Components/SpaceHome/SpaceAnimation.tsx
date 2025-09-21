export default function SpaceAnimation() {
    return (
        <div className="px-6 md:px-70 mt-50">
            <h1 className="text-4xl font-bold text-center text-white mb-12">
                Animacion 3D
            </h1>

            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
                {/* Imagen de referencia */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://i.pinimg.com/originals/d2/0d/04/d20d04fdaa2f8624fe5826cd3410e5ee.gif"
                        className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Texto descriptivo */}
                <div className="w-full md:w-1/2 text-white text-center md:text-left">
                    <p className="text-md font-light leading-relaxed mb-4">
                        El proceso de digitalización de un espacio a veces se queda corto para transmitir de forma completa la visión,
                        funcionalidad y el impacto que este puede tener en el mundo real. Por ello, en ArcovXR vamos más allá del modelado estático:
                        desarrollamos animaciones y experiencias interactivas que dan vida a cada diseño, permitiendo visualizar cómo se vería
                        y funcionaría el espacio en situaciones reales. Estas experiencias pueden incluir desde personajes 3D que interactúan con
                        el entorno hasta simulaciones dinámicas de iluminación, flujo de personas y uso de los espacios, generando una representación
                        inmersiva, realista y convincente que facilita la toma de decisiones y la presentación de proyectos de forma impactante.
                    </p>

                </div>
            </div>
        </div>
    )
}