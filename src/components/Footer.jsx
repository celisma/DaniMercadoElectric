import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Trabajos', href: '#trabajos' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getWhatsAppLink = () => {
    if (!siteConfig.contact.whatsapp) return '#contacto'
    const message = encodeURIComponent('Hola! Me gustaría solicitar un presupuesto.')
    return `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`
  }

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: siteConfig.social.instagram },
    { name: 'Facebook', icon: FaFacebook, url: siteConfig.social.facebook },
    { name: 'LinkedIn', icon: FaLinkedin, url: siteConfig.social.linkedin },
  ].filter(link => link.url)

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-2">{siteConfig.businessName}</h3>
            <p className="text-primary-400 mb-4">{siteConfig.tagline}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Servicios eléctricos profesionales en {siteConfig.serviceArea}. 
              Comprometidos con la seguridad y calidad.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label={`Visitar ${social.name}`}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {siteConfig.services.slice(0, 4).map((service) => (
                <li key={service.id} className="text-gray-400 text-sm">
                  {service.title}
                </li>
              ))}
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleNavClick(e, '#servicios')}
                  className="text-primary-400 hover:text-primary-300 text-sm transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Ver todos los servicios →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              {siteConfig.contact.whatsapp && (
                <li>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
                  >
                    <FaWhatsapp className="text-green-500" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </li>
              )}
              {siteConfig.contact.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^+0-9]/g, '')}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
                  >
                    <FiPhone aria-hidden="true" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </li>
              )}
              {siteConfig.contact.email && siteConfig.contact.email !== '[EMAIL DE CONTACTO]' && (
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none focus:underline"
                  >
                    <FiMail aria-hidden="true" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2 text-gray-400">
                <FiMapPin className="mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm">{siteConfig.serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.businessName}. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Sitio web creado para portfolio profesional
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
