import { FiUser, FiMapPin, FiAward } from 'react-icons/fi'
import { siteConfig } from '../config/siteConfig'

const About = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {siteConfig.about.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <FiUser className="mx-auto text-primary-700 mb-4" size={80} aria-hidden="true" />
                  <p className="text-primary-800 font-semibold">Foto Profesional</p>
                  <p className="text-sm text-primary-700 mt-1">[Agregar foto]</p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4 mb-6">
                {siteConfig.about.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-primary-700" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Zona de Atención</h3>
                    <p className="text-gray-600">{siteConfig.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiAward className="text-primary-700" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Compromiso</h3>
                    <p className="text-gray-600">Seguridad, calidad y profesionalismo en cada trabajo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
