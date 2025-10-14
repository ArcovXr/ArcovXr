import { motion } from "framer-motion";

const About_me = () => {
  return (
    <motion.section
      className="m-auto mt-10 flex flex-col rounded-4xl transition-all bg-cover bg-center md:mb-100 hover:scale-105 lg:hover:scale-100"
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
          <div className="mt-10  w-4/5 mx-auto lg:flex items-center justify-center">
            <iframe
              src="https://player.vimeo.com/video/1123767775"
              className="w-full h-[500px] rounded-2xl shadow-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo video player"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About_me;
