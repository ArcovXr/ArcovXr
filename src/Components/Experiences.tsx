import { motion } from "framer-motion";
import Experience from "./Experience";

function Experiences() {
    return (
        <motion.div
            className="w-2/3 mx-auto md:mt-100 anim_block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <h1 className="text-4xl font-black">
                Trayectoria
            </h1>

            {/* Proyecto Museo de Patologías VR */}
            <motion.div
                className="text-md mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="Universidad de La Sabana - Museo de Patologías VR"
                    occ="Desarrollo de Experiencias Inmersivas"
                    date="2023 - Presente"
                    s_skills={
                        <ul>
                            <li>Implementación de recorridos virtuales inmersivos en entornos educativos.</li>
                            <li>Uso de tecnologías VR para la enseñanza de la anatomía y patologías.</li>
                            <li>Integración de modelos 3D y entornos interactivos.</li>
                            <li>Aplicación de metodologías ágiles en proyectos de innovación.</li>
                        </ul>
                    }
                />
            </motion.div>

            {/* Proyecto Asistentes IA */}
            <motion.div
                className="text-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="Universidad de La Sabana"
                    occ="Asistentes con Inteligencia Artificial"
                    date="2023 - Presente"
                    s_skills={
                        <ul>
                            <li>Desarrollo de asistentes virtuales para acompañamiento académico y administrativo.</li>
                            <li>Aplicación de técnicas de IA para procesamiento de lenguaje natural.</li>
                            <li>Integración con plataformas internas de la universidad.</li>
                            <li>Diseño de experiencias intuitivas y accesibles para estudiantes y docentes.</li>
                        </ul>
                    }
                />
            </motion.div>

            {/* Proyecto Software Escolar en Metaverso */}
            <motion.div
                className="text-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="Instituciones Educativas"
                    occ="Software Escolar en Metaverso"
                    date="2024 - 2025"
                    s_skills={
                        <ul>
                            <li>Creación de entornos virtuales colaborativos para colegios.</li>
                            <li>Gamificación de procesos de enseñanza y aprendizaje.</li>
                            <li>Desarrollo de avatares y aulas interactivas en el metaverso.</li>
                            <li>Fomento del aprendizaje inmersivo y participativo.</li>
                        </ul>
                    }
                />
            </motion.div>

            {/* Proyecto Aplicaciones Inmersivas en el Bosque Sabana */}
            <motion.div
                className="text-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Experience
                    place="El Bosque"
                    occ="Aplicaciones Inmersivas en Naturaleza"
                    date="2025 - Actualidad"
                    s_skills={
                        <ul>
                            <li>Diseño de experiencias inmersivas en entornos naturales.</li>
                            <li>Uso de realidad aumentada y realidad mixta en espacios abiertos.</li>
                            <li>Aplicación de tecnologías interactivas para experiencias educativas y culturales.</li>
                            <li>Desarrollo sostenible de proyectos tecnológicos en ambientes naturales.</li>
                        </ul>
                    }
                />
            </motion.div>
        </motion.div>
    );
}

export default Experiences;
