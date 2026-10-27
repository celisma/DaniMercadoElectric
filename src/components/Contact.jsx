import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Por favor ingresa tu nombre.' })
      return false
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'Por favor ingresa un teléfono o email de contacto.' })
      return false
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Por favor describe el trabajo que necesitas.' })
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({ type: '', message: '' })
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // No hay backend configurado - mostrar mensaje informativo
    setTimeout(() => {
      setFormStatus({ 
        type: 'info', 
        message: 'Formulario listo para conectar. Se requiere un servicio backend o API (Formspree, Netlify Forms, EmailJS, etc.) para enviar mensajes. Mientras tanto, usa WhatsApp para contacto inmediato.' 
      })
      setIsSubmitting(false)
    }, 500)
  }

  const getWhatsAppLink = () => {
    if (!siteConfig.contact.whatsapp) return null
    const message = encodeURIComponent(
      `Hola! Mi nombre es ${formData.name || '[Nombre]'}. ${formData.message || 'Me gustaría solicitar un presupuesto.'}`
    )
    return `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`
  }

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, url: siteConfig.social.instagram },
    { name: 'Facebook', icon: FaFacebook, url: siteConfig.social.facebook },
    { name: 'LinkedIn', icon: FaLinkedin, url: siteConfig.social.linkedin },
  ].filter(link => link.url)

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Solicita tu presupuesto sin compromiso. Respuesta rápida y directa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
            
            <div className="space-y-4 mb-8">
              {siteConfig.contact.whatsapp && (
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  aria-label="Contactar por WhatsApp"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-white" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-green-700">Contactar por WhatsApp</p>
                  </div>
                </a>
              )}

              {siteConfig.contact.phone && (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^+0-9]/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-primary-700" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-gray-600">{siteConfig.contact.phone}</p>
                  </div>
                </a>
              )}

              {siteConfig.contact.email && siteConfig.contact.email !== '[EMAIL DE CONTACTO]' && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-primary-700" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">{siteConfig.contact.email}</p>
                  </div>
                </a>
              )}

              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-primary-700" size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Zona de Atención</p>
                  <p className="text-gray-600">{siteConfig.serviceArea}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            {socialLinks.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Redes Sociales</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        aria-label={`Visitar ${social.name}`}
                      >
                        <Icon size={24} />
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Enviar Consulta</h3>
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-md" noValidate>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre y Apellido <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-200"
                  aria-required="true"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-200"
                  placeholder="Ej: +XX XXXXXXXX"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-200"
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Descripción del Trabajo <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors duration-200 resize-none"
                  aria-required="true"
                  placeholder="Describe el trabajo que necesitas: tipo de servicio, ubicación, detalles..."
                ></textarea>
              </div>

              {formStatus.message && (
                <div
                  className={`mb-4 p-4 rounded-lg ${
                    formStatus.type === 'error'
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-blue-50 text-blue-800 border border-blue-200'
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  <p className="text-sm">{formStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>

              <p className="text-xs text-gray-500 mt-3">
                <span className="text-red-600">*</span> Campos obligatorios. Se recomienda usar WhatsApp para respuesta más rápida.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
