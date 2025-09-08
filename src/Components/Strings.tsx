import AppIcon from "./App_icon";
import Consultoria_icon from "./Consultoria_icon";
import DevIcon from "./Dev_icon";
import RenderIcon from "./Render_icon";
import { BrainIcon, ComputerIcon, CpuIcon, Workflow } from "lucide-react";

const servicios = [
  {
    title: "Consultoría",
    description:
      "En Arcov XR ofrecemos consultoría estratégica en tecnología para ayudarte a identificar, implementar y escalar soluciones innovadoras en tu empresa.",
    icon: <Consultoria_icon />,
    subitems: [
      {
        title: "Consultoría de diagnóstico",
description:
  "Analizamos tus procesos actuales y las tecnologías que utilizas, elaboramos un informe claro y aplicable con propuestas de mejora e incorporación de nuevas soluciones, presentamos los alcances y beneficios potenciales para tu empresa, y realizamos una demostración práctica para facilitar la familiarización con ellas.",
},
      {
       title: "Consultoría con implementación",
description:
  "Además de entregar un informe de tecnologías aplicables con sus respectivos alcances y beneficios, y la forma en que deberían ser implementadas, desarrollamos un plan de acción con plazos definidos para la adopción de tecnologías emergentes. Este plan se acuerda con la entidad y permite llevar a la práctica las recomendaciones obtenidas en la consultoría previa, complementado con la capacitación del equipo interno para garantizar el correcto manejo y aprovechamiento de las tecnologías implementadas.",

},
      {
  title: "Consultoría integral",
  description:
    "Recomendamos, implementamos y acompañamos todo el proceso de transformación digital, brindando soporte y actualización continua de las tecnologías implementadas. El acompañamiento se mantiene de forma permanente mientras la entidad lo requiera, incluyendo el mantenimiento y la optimización de las soluciones adoptadas.",
}

    ],
  },
{
  title: "Desarrollo XR",
  description:
    "Creamos experiencias inmersivas en realidad extendida (XR), incluyendo VR (realidad virtual y mixta), AR (realidad aumentada) y entornos de metaverso, integrando inteligencia artificial (IA) para ofrecer una experiencia líder en procesos de onboarding, capacitación y desarrollo de aplicaciones innovadoras.",
  icon: <BrainIcon />,
  subitems: [
    {
      title: "Realidad virtual y mixta",
      description:
        "Desarrollo de experiencias inmersivas en VR y VR mixta para entrenamiento, simulaciones, educación y entretenimiento, potenciados con IA para experiencias personalizadas.",
    },
    {
      title: "Realidad aumentada",
      description:
        "Aplicaciones de AR para mostrar productos, recorridos interactivos y experiencias en tiempo real.",
    },
    {
      title: "Soluciones para metaverso",
      description:
        "Diseño de espacios virtuales compartidos para eventos, trabajo remoto y networking digital, potenciados con IA para experiencias personalizadas.",
    },
  ],
},

  {
  title: "Desarrollo de IA",
  description:
    "Creamos soluciones de inteligencia artificial enfocadas en asistentes virtuales personalizados para la atención al cliente y en la optimización de procesos digitales clave de tu empresa, mejorando la eficiencia y la experiencia de usuario.",
  icon: <CpuIcon />,
  subitems: [
    {
      title: "Asistentes virtuales personalizados",
      description:
        "Diseño y entrenamiento de asistentes inteligentes para atención al cliente, integrados en WhatsApp, web o aplicaciones, disponibles 24/7 y adaptados a las necesidades de tu empresa.",
    },
    {
      title: "Optimización de procesos digitales",
      description:
        "Implementación de asistentes de IA que automatizan subtitulado, gestión de bases de datos y otros procesos internos, aumentando la productividad y reduciendo costos.",
    },
    {
      title: "Modelos de IA a medida",
      description:
        "Entrenamiento y personalización de modelos de IA ajustados a los objetivos y retos específicos de tu organización.",
    },
  ],
}
,
  {
  title: "Desarrollo Web",
  description:
    "Creamos sitios web adaptados a las necesidades de tu empresa, desde plataformas de e-commerce inteligentes hasta páginas de presentación modernas y funcionales, integrando asistentes de IA para potenciar la interacción y optimizar la experiencia del usuario.",
  icon: <DevIcon />,
  subitems: [
    {
      title: "E-commerce con IA integrada",
      description:
        "Tiendas en línea seguras y escalables con integración de pagos y un asistente de IA conectado a tu base de datos, capaz de responder consultas, recomendar productos y optimizar la experiencia de compra.",
    },
    {
  title: "Websites corporativos y de branding",
  description:
    "Diseño y desarrollo de websites elegantes, modernos y optimizados para transmitir la identidad de tu empresa. Ideales para mostrar información, proyectos y portafolios de forma clara y atractiva, con la posibilidad de integrar visualizaciones 3D que refuercen la presentación.",
}
,
    {
      title: "Presentación web con IA y modelos 3D",
      description:
        "Sitios web de presentación que incluyen un asistente de IA con interfaz de chat integrada y la visualización de modelos 3D interactivos para enriquecer la experiencia del usuario.",
    },
  ],
}
,
  {
    title: "Applicaciones",
    description:
      "Diseñamos y desarrollamos aplicaciones móviles personalizadas, multiplataforma y optimizadas para una experiencia de usuario fluida.",
    icon: <AppIcon />,
    subitems: [
      {
        title: "Apps móviles de e-commerce",
        description:
          "Aplicaciones móviles de compras con pasarelas de pago seguras.",
      },
      {
        title: "Herramientas de productividad",
        description:
          "Aplicaciones para la gestión eficiente de tareas, proyectos y flujos de trabajo.",
      },
      {
        title: "Soluciones multiplataforma",
        description: "Apps para iOS y Android con un mismo código base.",
      },
    ],
  },
  {
    title: "Desarrollo 3D",
    description:
      "Ofrecemos servicios de modelado, animación y renderizado 3D de alta calidad para arquitectura, productos y experiencias digitales.",
    icon: <RenderIcon />,
    subitems: [
      {
        title: "Diseño de personajes 3D",
        description:
          "Diseño de personajes para videojuegos, simulaciones o metaverso.",
      },
      {
        title: "Renderizado arquitectónico",
        description:
          "Visualizaciones realistas de proyectos arquitectónicos e interiores.",
      },
      {
        title: "Renderizado de productos",
        description:
          "Renderizado de productos para marketing y presentaciones.",
      },
    ],
  },
  {
    title: "Capacitaciones y Talleres",
    description:
      "Capacitamos a tu equipo en las últimas tecnologías para que adopten y aprovechen al máximo las herramientas digitales en tu negocio.",
    icon: <Workflow />,
    subitems: [
      {
  title: "Workshops y formación en XR",
  description:
    "Diseñamos y estructuramos módulos para diplomados, cursos y talleres aplicando tecnologías de realidad virtual (VR) y aumentada (AR), con el fin de potenciar la experiencia de aprendizaje y el desarrollo práctico de los participantes.",
},
      {
  title: "Talleres inmersivos con IA y VR",
  description:
    "Sesiones individuales dentro de cursos ya establecidos, impartidas en entornos de realidad virtual (VR) e impulsadas por inteligencia artificial, diseñadas para presentar los contenidos de forma inmersiva y facilitar la comprensión de los participantes.",
}
,
      {
  title: "Adopción digital",
  description:
    "Talleres de presentación y familiarización con tecnologías emergentes como Realidad Virtual (VR), Realidad Aumentada (AR), Metaverso e Inteligencia Artificial (IA). Se muestran sus aplicaciones prácticas y los alcances que pueden aportar a tu organización, preparando a tu equipo para aprovechar su potencial en el entorno laboral.",
}
,
    ],
  },
  {
    title: "Equipos",
    description:
      "Facilitamos el acceso a tecnología de alto rendimiento para que tu organización pueda desarrollar experiencias inmersivas y aplicaciones exigentes sin necesidad de inversión inicial.",
    icon: <ComputerIcon />,
    subitems: [
      {
        title: "Equipos para VR",
        description:
          "Dispositivos de realidad virtual de última generación para crear y probar experiencias inmersivas.",
      },
      {
        title: "Computadores de alto rendimiento",
        description:
          "Estaciones de trabajo optimizadas para el desarrollo de aplicaciones pesadas en 3D, simulación e inteligencia artificial.",
      },
      {
        title: "Kit de desarrollo completo",
        description:
          "Combinación de hardware y software para impulsar la innovación en proyectos de VR, AR y metaverso.",
      },
    ],
  },
];
export default servicios;
