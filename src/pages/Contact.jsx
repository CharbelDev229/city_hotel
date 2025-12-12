import { useState } from 'react'
import PageHeader from '../components/PageHeader'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Réinitialiser le message après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1000)
  }

  const phoneNumber = '+229XXXXXXXXX'
  const whatsappNumber = '229XXXXXXXXX'

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <PageHeader
          title="Contactez-nous"
          description="Nous sommes là pour répondre à toutes vos questions et vous aider à planifier votre séjour"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-hotel-dark font-secondary">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-hotel-dark">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-hotel-dark">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-hotel-dark">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:border-transparent resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-hotel-gold text-hotel-dark px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-hotel-dark font-secondary">Informations de contact</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-semibold text-hotel-dark mb-1 font-secondary">Adresse</h3>
                  <p className="text-gray-700">
                    CITY HOTEL KÉTOU<br />
                    Kétou, Bénin
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-semibold text-hotel-dark mb-1">Téléphone</h3>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-hotel-gold hover:underline"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="font-semibold text-hotel-dark mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hotel-gold hover:underline inline-flex items-center"
                  >
                    Cliquez pour discuter
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-semibold text-hotel-dark mb-1">Email</h3>
                  <a
                    href="mailto:contact@cityhotelketou.bj"
                    className="text-hotel-gold hover:underline"
                  >
                    contact@cityhotelketou.bj
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">🕐</div>
                <div>
                  <h3 className="font-semibold text-hotel-dark mb-1">Horaires</h3>
                  <p className="text-gray-700">
                    Réception : 24h/24 et 7j/7<br />
                    Restaurant : 6h - 23h<br />
                    Service de chambre : Disponible
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Action */}
            <div className="bg-hotel-light p-6 rounded-lg">
              <h3 className="font-semibold text-hotel-dark mb-3 font-secondary">Besoin d'une réponse rapide ?</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Contactez-nous directement sur WhatsApp pour une assistance immédiate
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Bonjour, je souhaite obtenir des informations sur CITY HOTEL KÉTOU`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-smooth"
              >
                <span className="mr-2">💬</span>
                Ouvrir WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-hotel-dark font-secondary">Trouvez-nous</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d2.6!3d7.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjEnMDAuMCJOIDLCsDM2JzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1234567890123!5m2!1sfr!2sbj"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Google Maps - CITY HOTEL KÉTOU"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact


