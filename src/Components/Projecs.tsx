import { motion } from "framer-motion";
import Project_card from "./Project_card";

import { BrainIcon, CameraIcon,  Code2 } from "lucide-react";
import { CpuChipIcon } from "@heroicons/react/16/solid";


function Projects() {
  return (
    <motion.div
      className="w-5/6 mx-auto anim_block_projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="text-3xl font-semibold">Nuestros Proyectos</div>

      {/* Espacios VR */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Project_card
          project="Espacios en Realidad Virtual"
          description="Diseñamos entornos inmersivos en VR que permiten a empresas, instituciones y usuarios vivir experiencias interactivas únicas. Ideales para capacitación, entretenimiento y simulación de procesos."
          image="http://i.pinimg.com/1200x/d4/c0/2a/d4c02ab6ea1144040cd0cb1174f39b94.jpg"
          technologies={
            <>
              <BrainIcon className="w-full h-full p-10" />
            </>
          }
          link={""}
        />
      </motion.div>

      {/* Metaversos */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Project_card
          project="Metaversos"
          description="Creamos mundos virtuales personalizados donde usuarios pueden interactuar, colaborar y explorar. Desde espacios sociales hasta simulaciones corporativas, impulsamos el futuro digital de la conexión humana."
          image="https://i.pinimg.com/736x/29/79/ad/2979ad7f0418cbe6f2afc2745f7bf598.jpg"
          technologies={
            <>
              <BrainIcon className="w-full h-full p-10" />
            </>
          }
          link={""}
        />
      </motion.div>

      {/* Realidad Aumentada */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Project_card
          project="Realidad Aumentada"
          description="Integramos elementos digitales en el mundo físico para enriquecer la experiencia del usuario. Desde marketing interactivo hasta educación avanzada, llevamos la innovación al día a día."
          image="https://i.pinimg.com/1200x/b3/3d/3b/b33d3b833f39293ae5cb6035a9d718c1.jpg"
          technologies={
            <>
              <BrainIcon className="w-full h-full p-10" />
            </>
          }
          link={""}
        />
      </motion.div>

      {/* Capacitación con IA */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Project_card
          project="Capacitación Inmersiva con IA"
          description="Aplicaciones VR integradas con Inteligencia Artificial que simulan escenarios de entrenamiento. Ideales para educación médica, formación industrial y aprendizaje interactivo."
          image="https://i.pinimg.com/736x/1c/ea/80/1cea80703c7ae5f94a449399816f6a82.jpg"
          technologies={
            <>
              <CpuChipIcon className="w-full h-full p-10"/>
            </>
          }
          link={""}
        />
      </motion.div>

      {/* Asistentes con IA */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Project_card
          project="Asistentes Virtuales Inteligentes"
          description="Desarrollamos asistentes virtuales personalizados que combinan IA y entornos 3D para ofrecer experiencias de onboarding, soporte educativo y acompañamiento en procesos corporativos."
          image="https://i.pinimg.com/1200x/78/47/cf/7847cf026b1694faaa89512623d1672c.jpg"
          technologies={
            <>
              <CpuChipIcon className="w-full h-full p-10"/>
            </>
          }
          link={""}
        />
      </motion.div>

      {/* Webs con vistas 3D */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Project_card
          project="Webs con Vistas 3D Interactivas"
          description="Creamos páginas web con integración 3D que permiten visualizar proyectos arquitectónicos, industriales y creativos de manera dinámica e inmersiva."
          image="https://i.pinimg.com/originals/4d/f0/40/4df040cccfbfcf936c985c763cbe30df.gif"
          technologies={
            <>
              <Code2 className="w-full h-full p-10"/>
            </>
          }
          link={""}
        />
      </motion.div>

      {/* Digitalización 3D */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Project_card
          project="Digitalización 3D de Arquitecturas"
          description="Transformamos planos y diseños arquitectónicos en modelos tridimensionales interactivos. Una herramienta poderosa para visualización, presentación y planificación de proyectos."
          image="https://i.pinimg.com/736x/7f/65/2d/7f652d18589592134c8ca3010ecd443a.jpg"
          technologies={
            <>
              <CameraIcon className="w-full h-full p-10"/>
            </>
          }
          link={""}
        />
      </motion.div>
    </motion.div>
  );
}

export default Projects;
