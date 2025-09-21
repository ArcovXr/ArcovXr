export default function VREducation() {
  return (
    <div className="px-6 md:px-70 mt-50">
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Interacción con el Espacio
      </h1>

      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-10 md:space-y-0">
        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <p className="text-md font-light leading-relaxed mb-4">
            La creación de espacios educativos inmersivos permite que los estudiantes no solo reciban información, 
            sino que interactúen activamente con el entorno donde se desarrolla el aprendizaje. 
            Esta conexión entre el contenido y el espacio potencia la comprensión y retención del conocimiento, 
            logrando experiencias más significativas y atractivas.
            <br /><br />
            En <span className=" font-semibold">ArcovXr</span> desarrollamos entornos virtuales realistas e interactivos 
            diseñados para el sector educativo, transformando la forma de enseñar y aprender desde niveles escolares 
            hasta educación superior y formación especializada.
          </p>
        </div>

        {/* Imagen del modelo 3D */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/2d/73/ef/2d73efe9543017cf4ea6b1e42e690136.jpg"
            alt="Espacio educativo inmersivo en VR"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
