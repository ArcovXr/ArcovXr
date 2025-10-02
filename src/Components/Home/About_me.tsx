import { motion } from "framer-motion";
import videoFile from "./ArcovXRVI.mov";

const About_me = () => {
  return (
    <motion.section
      className="m-auto flex flex-col rounded-4xl transition-all bg-cover bg-center md:mb-100 hover:scale-105 lg:hover:scale-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="rounded-4xl transition-all opacity-70 hover:opacity-90 lg:opacity-100 lg:hover:opacity-100 lg:bg-transparent hover:cursor-pointer">
        <div className="p-7 lg:p-15">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold">
            Sobre Nosotros
          </h1>

          {/* Texto */}
          <div className="mx-auto mt-10 lg:w-4/5 text-center">
            <div className="items-center text-sm md:text-lg lg:text-md md:text-gray-200 lg:text-gray-500">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                En Arcov XR convertimos la innovación en resultados concretos: soluciones digitales que amplían el alcance de tu organización mientras reducen costos. Con más de tres años de experiencia, exploramos el potencial de la realidad extendida, el diseño interactivo y las experiencias inmersivas para transformar la manera en que se aprende, enseña y conecta.
              </motion.p>
              <motion.p
                className="mt-2 md:mt-4 lg:mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Nuestro enfoque es claro: trabajar de forma colaborativa, con detalle y estrategia, para que cada proyecto no solo cumpla con los más altos estándares tecnológicos, sino que genere impacto real en la educación y en las organizaciones que confían en nosotros.
              </motion.p>
            </div>
          </div>

          {/* Video con sonido */}
          <div className="mt-10 hidden w-4/5 mx-auto lg:flex items-center justify-center">
            <motion.video
              className="m-auto rounded-3xl shadow-lg"
              src={videoFile}
              controls  // 👈 agrega controles para que el usuario pueda activar sonido
              autoPlay={false} // 👈 mejor quitar autoplay si quieres que suene
              playsInline
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About_me;
