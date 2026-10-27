import { FiMapPin } from 'react-icons/fi'
import { siteConfig } from '../config/siteConfig'

const Coverage = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiMapPin className="text-primary-600" size={32} aria-hidden="true" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Zona de Cobertura
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Atiendo en: <span className="font-semibold text-primary-700">{siteConfig.serviceArea}</span>
          </p>
          <p className="text-gray-600">
            Consulta disponibilidad para otras zonas contactándome directamente.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Coverage
