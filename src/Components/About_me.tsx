// About_me.tsx
import { motion } from "framer-motion";

const About_me = () => {
  return (
    <motion.div
      className="transition-all w-3/4  m-auto md:mb-100 anim_block  lg:bg-none flex-col  bg-cover bg-center rounded-4xl lg:hover:scale-100 hover:scale-105"/*bg-[url('https://raw.githubusercontent.com/Juan100205/rianodev/main/src/assets/Pics/About_me.jpeg')]*/
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className=" transition-all hover:cursor-pointer lg:opacity-100 lg:hover:opacity-100  lg:bg-transparent   rounded-4xl opacity-70 hover:opacity-90 ">
        <div className="lg:p-15 p-7 ">
      <h1 className="text-4xl font-semibold ">Sobre Nosotros</h1>
      <div className="md:flex">
        <div className="lg:w-4/7">
          <div className="lg:pt-10 mt-10 lg:text-gray-500 md:text-gray-200 text-sm lg:text-xl md:text-md  items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              En Arcov XR somos un equipo con más de tres años de experiencia en innovación, dedicados al trabajo constante y exhaustivo en la aplicación de las últimas tecnologías. Nuestra pasión es transformar ideas en soluciones digitales de alto impacto, explorando y aprovechando el potencial de la realidad extendida, el diseño interactivo y las experiencias inmersivas.
            </motion.p>
            <motion.p
              className="mt-2 md:mt-4 lg:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              Nos caracterizamos por un enfoque colaborativo y orientado al detalle, asegurando que cada proyecto no solo cumpla con los estándares tecnológicos más recientes, sino que también genere valor real para nuestros clientes. En Arcov XR, la innovación no es un resultado, es un proceso continuo que guía todo lo que hacemos.
              </motion.p>
          </div>
        </div>
        <div className="hidden w-3/7 lg:flex items-center justify-center">
          <motion.img
              className="w-4/5 m-auto  rounded-4xl "
              src="https://i.pinimg.com/736x/17/89/a7/1789a77ebcef4252acbb82cb033f1875.jpg" 
              alt="About me"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />
          
        </div>
      </div>
      </div>
      </div>
    </motion.div>
  );
};

export default About_me;
