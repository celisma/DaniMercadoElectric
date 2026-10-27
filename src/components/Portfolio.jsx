import { FiImage } from 'react-icons/fi'
import { siteConfig } from '../config/siteConfig'

const Portfolio = () => {
  return (
    <section id="trabajos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trabajos Realizados
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Galería de trabajos. Las imágenes mostradas son placeholders - reemplaza con fotos reales de tus trabajos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteConfig.portfolio.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2"
              tabIndex="0"
            >
              <div className="h-48 md:h-56 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-center p-4">
                    <FiImage className="mx-auto text-gray-500 mb-2" size={48} aria-hidden="true" />
                    <p className="text-sm text-gray-600 font-medium">IMAGEN PLACEHOLDER</p>
                    <p className="text-xs text-gray-500 mt-1">Agregar foto real</p>
                  </div>
                )}
                {project.isPlaceholder && (
                  <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded font-semibold">
                    Placeholder
                  </span>
                )}
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Para mostrar trabajos reales, agrega las fotos en la carpeta <code className="bg-yellow-100 px-1 rounded">src/assets/portfolio/</code> 
            y actualiza la configuración en <code className="bg-yellow-100 px-1 rounded">src/config/siteConfig.js</code>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
