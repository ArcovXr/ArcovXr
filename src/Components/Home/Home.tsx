import { motion } from "framer-motion";
import ArcovXrIcon from "../Icons/ArcovXrIcon";
import videoFile from "./ArcovXRVI.mov"; // 👈 importa tu video

const Home = () => {
  return (
    <section className="relative pt-20 w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <motion.video
        className="absolute -top-0 left-0 w-full h-full object-cover"
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Fade a negro en la parte de abajo */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Contenido encima */}
      <motion.div
        className="relative z-10 m-auto w-2/3 text-left pt-30 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-gray-200 text-xl md:text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Bienvenidos a
        </motion.div>

        <motion.div
          className="text-6xl md:text-9xl font-semibold mt-4 md:mt-8 w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ArcovXrIcon />
        </motion.div>

        <motion.div
          className="text-white font-light text-2xl md:text-5xl mt-4 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          Consultora en Tecnologías Emergentes
        </motion.div>

        <motion.div
          className="text-gray-300 mt-4 text-lg md:text-3xl md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          viewport={{ once: true }}
        >
          Especialistas en la aplicación de las últimas tecnologías al servicio de las
          organizaciones.
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
