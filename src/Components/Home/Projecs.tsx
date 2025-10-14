import { motion } from "framer-motion";
import Project_card from "./Project_card";

import { BrainIcon, CameraIcon, Code2 } from "lucide-react";
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
          description="Creamos experiencias inmersivas en VR que van desde recorridos de alta resolución, donde es posible explorar espacios con gran realismo, hasta entornos completamente interactivos en los que el usuario se desenvuelve con objetos y situaciones del entorno. Todo acompañado por un agente de IA que actúa como guía y capacitador, complementando la experiencia con información relevante y contextual."
          image="./src/assets/VR.jpg"
          technologies={<BrainIcon className="w-full h-full p-10" />}
          link={"/HomeVr"}
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
          description="Desarrollamos experiencias en metaversos que van desde espacios genéricos para la interacción social y la exploración colaborativa, hasta mundos completamente personalizados donde los usuarios pueden interactuar con el entorno y participar en simulaciones únicas. Todo esto acompañado por un asistente de IA que guía, capacita y enriquece la experiencia con información contextual y soporte en tiempo real."
          image="https://i.pinimg.com/736x/29/79/ad/2979ad7f0418cbe6f2afc2745f7bf598.jpg"
          technologies={<BrainIcon className="w-full h-full p-10" />}
          link="https://www.spatial.io/s/Center_Template-68be4ffb188d4c2faee39dd8?share=5704062548552014126"
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
          image="./src/assets/AR.jpg"   // Imagen inicial
          altImage="https://i.pinimg.com/736x/f3/18/3a/f3183a7419d268638fd6f5185f95f11c.jpg" // Imagen alterna al dar clic
          technologies={<BrainIcon className="w-full h-full p-10" />}
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
          description="Implementamos experiencias de capacitación en entornos VR y AR, ya sea en espacios digitales o mixtos, acompañadas por un asistente de IA especializado en un área específica. Estas experiencias permiten a los participantes formarse de manera inmersiva, interactiva y guiada, optimizando procesos de aprendizaje en sectores como la educación médica, la formación industrial o el entrenamiento corporativo."
          image="./src/assets/CIA.jpg"
          technologies={<CpuChipIcon className="w-full h-full p-10" />}
          link={"/HomeIA"}
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
          description="Creamos asistentes de IA diseñados para la atención de usuarios y la optimización de procesos internos en tu empresa. Estos asistentes se personalizan según tus necesidades específicas y se integran en interfaces visuales atractivas, potenciadas con elementos 3D para una experiencia más intuitiva, inmersiva y llamativa."
          image="https://i.pinimg.com/1200x/78/47/cf/7847cf026b1694faaa89512623d1672c.jpg"
          technologies={<CpuChipIcon className="w-full h-full p-10" />}
          link={"/HomeChat"}
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
          technologies={<Code2 className="w-full h-full p-10" />}
          link={"/Home3D"}
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
          technologies={<CameraIcon className="w-full h-full p-10" />}
          link={"/HomeSpace"}
        />
      </motion.div>
    </motion.div>
  );
}

export default Projects;