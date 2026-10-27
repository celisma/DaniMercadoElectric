// CONFIGURACIÓN CENTRALIZADA - Completar con datos reales
// No inventes teléfonos, direcciones ni reseñas. Usa placeholders claros.

export const siteConfig = {
  businessName: "Daniel Mercado TEC",
  tagline: "Electricista Profesional",
  description: "Servicios eléctricos seguros, confiables y profesionales",
  
  // Zona de atención
  serviceArea: "San Miguel de Tucumán, Tafí Viejo y alrededores",
  
  // Contacto
  contact: {
    phone: "", // Opcional - Formato internacional: +XX XXXXXXXXX
    whatsapp: "543813017342", // Argentina - Formato para wa.me sin + ni espacios
    email: "", // Opcional
    address: "", // Opcional
  },
  
  // Redes sociales
  social: {
    instagram: "https://instagram.com/danielmercado", // Editar si el usuario es distinto
    facebook: "", // https://facebook.com/pagina
    linkedin: "", // https://linkedin.com/in/usuario
    twitter: "", // https://twitter.com/usuario
  },
  
  // Servicios - Editables
  services: [
    {
      id: 1,
      title: "Instalaciones Eléctricas",
      description: "Instalaciones completas para viviendas, locales comerciales e industriales. Cumplimiento de normativas vigentes.",
      icon: "zap"
    },
    {
      id: 2,
      title: "Reparaciones y Mantenimiento",
      description: "Solución rápida de averías, cortocircuitos, fallas eléctricas y mantenimiento preventivo.",
      icon: "wrench"
    },
    {
      id: 3,
      title: "Tableros Eléctricos",
      description: "Montaje, actualización y reparación de cuadros eléctricos, disyuntores y protecciones.",
      icon: "grid"
    },
    {
      id: 4,
      title: "Iluminación",
      description: "Diseño e instalación de sistemas de iluminación interior, exterior y eficiente.",
      icon: "lightbulb"
    },
    {
      id: 5,
      title: "Puntos de Luz y Tomas",
      description: "Ampliación de circuitos, instalación de tomas, interruptores y puntos adicionales.",
      icon: "plug"
    },
    {
      id: 6,
      title: "Certificaciones y Verificaciones",
      description: "Inspecciones, mediciones y asesoramiento para cumplir con requerimientos eléctricos.",
      icon: "check"
    }
  ],
  
  // Proceso de trabajo
  process: [] ,
  
  // Portfolio - Usar placeholders si no hay fotos reales
  portfolio: [
    {
      id: 1,
      title: "[TRABAJO PLACEHOLDER 1]",
      category: "Instalaciones",
      description: "Descripción pendiente - Reemplazar con información real del trabajo.",
      image: null, // null = mostrar placeholder
      isPlaceholder: true
    },
    {
      id: 2,
      title: "[TRABAJO PLACEHOLDER 2]",
      category: "Reparaciones",
      description: "Descripción pendiente - Reemplazar con información real del trabajo.",
      image: null,
      isPlaceholder: true
    },
    {
      id: 3,
      title: "[TRABAJO PLACEHOLDER 3]",
      category: "Tableros",
      description: "Descripción pendiente - Reemplazar con información real del trabajo.",
      image: null,
      isPlaceholder: true
    }
  ],
  
  // Sobre mí/empresa
  about: {
    title: "Sobre Daniel Mercado TEC",
    description: [
      "Electricista profesional con compromiso con la seguridad, calidad y puntualidad en cada trabajo.",
      "Servicio personalizado para viviendas, comercios y pequeñas industrias en San Miguel de Tucumán, Tafí Viejo y alrededores.",
      "Trabajo con seriedad, materiales confiables y atención a cada detalle para garantizar resultados duraderos."
    ]
  }
}
