import { FiZap, FiTool, FiGrid, FiSun, FiPower, FiCheckSquare } from 'react-icons/fi'
import { siteConfig } from '../config/siteConfig'

const iconMap = {
  zap: FiZap,
  wrench: FiTool,
  grid: FiGrid,
  lightbulb: FiSun,
  plug: FiPower,
  check: FiCheckSquare
}

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Servicios Eléctricos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones eléctricas completas para viviendas, comercios y proyectos. Todos los trabajos realizados con seguridad y profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon] || FiZap
            return (
              <article
                key={service.id}
                className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-xl hover:border-primary-300 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2"
                tabIndex="0"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary-700" size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Consultar por un Servicio
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
