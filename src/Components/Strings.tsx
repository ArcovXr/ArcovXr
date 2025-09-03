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
            "Analizamos tus procesos actuales y te entregamos un informe con recomendaciones claras y aplicables.",
        },
        {
          title: "Consultoría con implementación",
          description:
            "Además de recomendar, te ayudamos a implementar las soluciones tecnológicas necesarias.",
        },
        {
          title: "Consultoría integral",
          description:
            "Recomendamos, implementamos y acompañamos en todo el proceso de transformación digital.",
        },
      ],
    },
    {
      title: "Desarrollo XR",
      description:
        "Creamos experiencias inmersivas en realidad extendida (XR), incluyendo VR (realidad virtual y mixta), AR (realidad aumentada) y entornos de metaverso, además de aplicaciones de escritorio interactivas.",
      icon: <BrainIcon />,
      subitems: [
        {
          title: "Realidad virtual y mixta",
          description:
            "Desarrollo de experiencias inmersivas en VR y VR mixta para entrenamiento, simulaciones, educación y entretenimiento.",
        },
        {
          title: "Realidad aumentada",
          description:
            "Aplicaciones de AR para mostrar productos, recorridos interactivos y experiencias en tiempo real.",
        },
        {
          title: "Soluciones para metaverso",
          description:
            "Diseño de espacios virtuales compartidos para eventos, trabajo remoto y networking digital.",
        },
      ],
    },
    {
      title: "Desarrollo de IA",
      description:
        "Implementamos soluciones de inteligencia artificial adaptadas a tu empresa, para optimizar procesos y mejorar la experiencia del cliente.",
      icon: <CpuIcon />,
      subitems: [
        {
          title: "Asistentes virtuales",
          description:
            "Asistentes inteligentes integrados en WhatsApp, web o apps, disponibles 24/7 para tus clientes.",
        },
        {
          title: "Modelos de IA personalizados",
          description:
            "Entrenamiento de modelos de IA personalizados para tus necesidades específicas.",
        },
        {
          title: "Optimización de procesos con IA",
          description:
            "Automatización y optimización de procesos internos con algoritmos inteligentes.",
        },
      ],
    },
    {
      title: "Desarrollo Web",
      description:
        "Desarrollo web fullstack adaptado a las necesidades de tu empresa, desde páginas básicas hasta plataformas avanzadas. Integramos modelos 3D en tus sitios si lo requieres.",
      icon: <DevIcon />,
      subitems: [
        {
          title: "E-commerce",
          description:
            "Tiendas en línea seguras, escalables y fáciles de usar con integración de pagos.",
        },
        {
          title: "APIs personalizadas",
          description:
            "Desarrollo de APIs para conectar tus sistemas y escalar funcionalidades.",
        },
        {
          title: "Sitios web con 3D",
          description:
            "Sitios web que incluyen modelos 3D interactivos para destacar productos o servicios.",
        },
      ],
    },
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
          title: "Workshops en XR",
          description:
            "Talleres prácticos en VR, AR y metaverso para distintas industrias.",
        },
        {
          title: "Formación en IA aplicada",
          description:
            "Entrenamiento en el uso de IA para mejorar la toma de decisiones empresariales.",
        },
        {
          title: "Adopción digital",
          description:
            "Capacitaciones en herramientas digitales para optimizar el día a día en tu organización.",
        },
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