import { FiPhone, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

const Hero = () => {
  const getWhatsAppLink = () => {
    if (!siteConfig.contact.whatsapp) return '#contacto'
    const message = encodeURIComponent('Hola! Me gustaría solicitar un presupuesto para servicios eléctricos.')
    return `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`
  }

  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {siteConfig.tagline}
            <span className="block text-primary-700 mt-2">{siteConfig.businessName}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            {siteConfig.description}
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Instalaciones, reparaciones y mantenimiento eléctrico con garantía de seguridad, calidad y profesionalismo en {siteConfig.serviceArea}.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-gray-700">
              <FiCheckCircle className="text-primary-600" aria-hidden="true" />
              <span>Trabajo Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiCheckCircle className="text-primary-600" aria-hidden="true" />
              <span>Presupuesto Sin Compromiso</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiCheckCircle className="text-primary-600" aria-hidden="true" />
              <span>Atención Profesional</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.contact.whatsapp ? getWhatsAppLink() : '#contacto'}
              target={siteConfig.contact.whatsapp ? '_blank' : '_self'}
              rel={siteConfig.contact.whatsapp ? 'noopener noreferrer' : ''}
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={(e) => {
                if (!siteConfig.contact.whatsapp) {
                  e.preventDefault()
                  document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              aria-label={siteConfig.contact.whatsapp ? 'Contactar por WhatsApp' : 'Ir a sección de contacto'}
            >
              <FaWhatsapp size={24} aria-hidden="true" />
              {siteConfig.contact.whatsapp ? 'Solicitar por WhatsApp' : 'Solicitar Presupuesto'}
            </a>
            
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-200 font-semibold text-lg border-2 border-primary-600 flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <FiPhone aria-hidden="true" />
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
