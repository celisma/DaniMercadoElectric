import { useState } from 'react'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { siteConfig } from '../config/siteConfig'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    setIsMenuOpen(false)
  }

  const getWhatsAppLink = () => {
    if (!siteConfig.contact.whatsapp) return '#contacto'
    const message = encodeURIComponent('Hola! Me gustaría solicitar un presupuesto.')
    return `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="text-xl md:text-2xl font-bold text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              aria-label="Ir al inicio"
            >
              {siteConfig.businessName}
            </a>
            <p className="text-xs text-gray-600 hidden sm:block">{siteConfig.tagline}</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-primary-700 hover:bg-gray-100 px-3 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex">
            <a
              href={siteConfig.contact.whatsapp ? getWhatsAppLink() : '#contacto'}
              target={siteConfig.contact.whatsapp ? '_blank' : '_self'}
              rel={siteConfig.contact.whatsapp ? 'noopener noreferrer' : ''}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={(e) => {
                if (!siteConfig.contact.whatsapp) {
                  e.preventDefault()
                  handleNavClick(e, '#contacto')
                }
              }}
            >
              <FiPhone aria-hidden="true" />
              Solicitar Presupuesto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={siteConfig.contact.whatsapp ? getWhatsAppLink() : '#contacto'}
                target={siteConfig.contact.whatsapp ? '_blank' : '_self'}
                rel={siteConfig.contact.whatsapp ? 'noopener noreferrer' : ''}
                className="block px-3 py-2 mt-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-semibold text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                onClick={(e) => {
                  if (!siteConfig.contact.whatsapp) {
                    e.preventDefault()
                    handleNavClick(e, '#contacto')
                  }
                  setIsMenuOpen(false)
                }}
              >
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
