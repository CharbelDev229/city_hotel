import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import whatsappLogo from '../assets/social_15707820.png'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactInfo = {
    address: 'Kétou, Bénin',
    email: 'contact@cityhotelketou.bj',
    phone: '+229 97 00 00 00',
    whatsapp: '+229 97 00 00 00'
  }

  return (
    <div className="bg-gray-10 min-h-screen pb-30 font-sans">

      {/* HEADER SECTION - Custom height for overlap */}
      <div className="relative bg-hotel-dark h-[500px] lg:h-[550px] w-full pt-32 lg:pt-40 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600')] bg-cover bg-center opacity-60"></div>
        </div>

        <div className="relative z-20 container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-secondary tracking-wide"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-tertiary"
          >
            Une question ? Besoin d'informations ? Nous sommes là pour vous aider.
          </motion.p>
        </div>
      </div>

      {/* FLOATING CARD SECTION */}
      <div className="container mx-auto px-4 lg:px-12 relative z-30 -mt-32 lg:-mt-40 mb-20 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
        >
          {/* LEFT COLUMN: CONTACT INFO (Blue Background from Reference Idea/Brand) */}
          <div className="lg:w-2/5 bg-hotel-dark text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-hotel-gold opacity-10 rounded-full blur-3xl"></div>

            <div>
              <h3 className="text-2xl font-bold mb-2 font-secondary">Informations</h3>
              <p className="text-gray-300 text-sm mb-10">Retrouvez-nous facilement ou contactez-nous directement.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-hotel-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Adresse</h4>
                    <p className="text-gray-400 text-sm">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-hotel-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-400 text-sm hover:text-white transition-colors">{contactInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-hotel-gold shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Téléphone</h4>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-400 text-sm hover:text-white transition-colors block">{contactInfo.phone}</a>
                    <a href={`https://wa.me/${contactInfo.whatsapp}`} className="text-green-400 text-xs hover:text-green-300 transition-colors mt-2 inline-flex items-center gap-2">
                      <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
                      Sur WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Suivez-nous</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-hotel-gold hover:text-white transition-all duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-hotel-gold hover:text-white transition-all duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-hotel-gold hover:text-white transition-all duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-hotel-gold hover:text-white transition-all duration-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-white">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-hotel-dark mb-2 font-secondary">Envoyez-nous un message</h3>
              <p className="text-gray-500 text-sm">Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="Votre numéro"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                  placeholder="Écrivez votre message ici..."
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm border border-green-100 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Message envoyé avec succès !
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-hotel-gold text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* MAP SECTION - 90% Width */}
      <div className="w-[90%] mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d2.6!3d7.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjEnMDAuMCJOIDLCsDM2JzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1234567890123!5m2!1sfr!2sbj"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte Google Maps - CITY HOTEL KÉTOU"
        ></iframe>
      </div>

    </div>
  )
}

export default Contact
