import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'

function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
  })

  // Set default dates (Today and Tomorrow)
  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    setFormData(prev => ({
      ...prev,
      checkIn: today.toISOString().split('T')[0],
      checkOut: tomorrow.toISOString().split('T')[0]
    }))
  }, [])

  const rooms = [
    { value: 'standard', label: 'Chambre Standard', price: '15,000 FCFA' },
    { value: 'deluxe', label: 'Chambre Deluxe', price: '25,000 FCFA' },
    { value: 'vip', label: 'Suite VIP', price: '45,000 FCFA' },
    { value: 'familiale', label: 'Chambre Familiale', price: '35,000 FCFA' },
  ]

  const whatsappNumber = '22997000000' // Placeholder, replace with actual if known

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const selectedRoom = rooms.find(r => r.value === formData.roomType)

    // Formater le message pour WhatsApp
    const message = `*NOUVELLE RÉSERVATION* 🏨
    
👤 *Nom* : ${formData.name}
📞 *Téléphone* : ${formData.phone}
🛏️ *Chambre* : ${selectedRoom?.label || formData.roomType}
💰 *Prix estimé* : ${selectedRoom?.price || 'À confirmer'}/nuit
    
📅 *Arrivée* : ${formData.checkIn}
📅 *Départ* : ${formData.checkOut}
👥 *Invités* : ${formData.guests}

Merci de confirmer la disponibilité.`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const today = new Date().toISOString().split('T')[0]
  const selectedRoomDetails = rooms.find(r => r.value === formData.roomType)

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">

      {/* HEADER SPECIALE (Style Contact) */}
      <div className="relative bg-hotel-dark h-[500px] lg:h-[550px] w-full pt-32 lg:pt-40 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60 z-10"></div>
          {/* Using a nice room image for background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1600')] bg-cover bg-center opacity-60"></div>
        </div>

        <div className="relative z-20 container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-primary tracking-wide"
          >
            Réservez votre Séjour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-tertiary"
          >
            Vivez l'expérience CITY HOTEL KÉTOU. Simplicité, confort et élégance.
          </motion.p>
        </div>
      </div>

      {/* FLOATING CARD SECTION */}
      <div className="container mx-auto px-4 lg:px-12 relative z-30 -mt-32 lg:-mt-40 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]"
        >
          {/* LEFT COLUMN: INFO (Dark Blue) */}
          <div className="lg:w-2/5 bg-hotel-dark text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hotel-gold opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div>
              <h3 className="text-2xl font-bold mb-6 font-secondary text-hotel-gold">Comment ça marche ?</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-hotel-gold">1</span>
                  <p className="text-gray-300 text-sm leading-relaxed">Remplissez le formulaire avec vos dates et préférences.</p>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-hotel-gold">2</span>
                  <p className="text-gray-300 text-sm leading-relaxed">Cliquez sur "Envoyer la réservation".</p>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-hotel-gold">3</span>
                  <p className="text-gray-300 text-sm leading-relaxed">Finalisez votre demande directement avec notre équipe via WhatsApp.</p>
                </div>
              </div>

              {/* DYNAMIC ROOM PREVIEW */}
              {selectedRoomDetails && (
                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Votre Sélection</h4>
                  <p className="text-xl font-bold font-secondary mb-1">{selectedRoomDetails.label}</p>
                  <p className="text-hotel-gold text-2xl font-bold">{selectedRoomDetails.price}<span className="text-sm text-gray-400 font-normal"> / nuit</span></p>
                </div>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Besoin d'une assistance immédiate ?</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+22997000000" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Appeler
                </a>
                <a href={`https://wa.me/${whatsappNumber}`} className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg text-sm transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM (White) */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-white">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-hotel-dark mb-2 font-secondary">Détails de la réservation</h3>
              <p className="text-gray-500 text-sm">Vérifiez vos dates et le type de chambre souhaité.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="+229..."
                  />
                </div>
              </div>

              {/* Room & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Type de chambre</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none appearance-none"
                  >
                    <option value="">Sélectionnez...</option>
                    {rooms.map(r => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Voyageurs</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Date d'arrivée</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    min={today}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Date de départ</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    min={formData.checkIn}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-hotel-gold focus:bg-white focus:ring-0 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-hotel-gold text-hotel-dark font-bold rounded-lg shadow-lg hover:bg-opacity-90 hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  Réserver avec WhatsApp
                </button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Reservation
