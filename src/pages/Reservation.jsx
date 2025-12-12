import { useState } from 'react'
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

  const rooms = [
    { value: 'standard', label: 'Chambre Standard - 15,000 FCFA/nuit' },
    { value: 'deluxe', label: 'Chambre Deluxe - 25,000 FCFA/nuit' },
    { value: 'vip', label: 'Suite VIP - 45,000 FCFA/nuit' },
    { value: 'familiale', label: 'Chambre Familiale - 35,000 FCFA/nuit' },
  ]

  const whatsappNumber = '229XXXXXXXXX'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Formater le message pour WhatsApp
    const message = `Bonjour, je souhaite faire une réservation :

👤 Nom : ${formData.name}
📞 Téléphone : ${formData.phone}
🛏️ Type de chambre : ${rooms.find(r => r.value === formData.roomType)?.label || formData.roomType}
📅 Date d'arrivée : ${formData.checkIn}
📅 Date de départ : ${formData.checkOut}
👥 Nombre de personnes : ${formData.guests}

Merci de me confirmer la disponibilité.`

    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message)

    // Ouvrir WhatsApp avec le message prérempli
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  // Calculer la date minimale (aujourd'hui)
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <PageHeader
          title="Réservation"
          description="Réservez votre chambre dès maintenant et profitez de votre séjour à CITY HOTEL KÉTOU"
        />

        {/* Info Box */}
        <div className="bg-hotel-light p-6 rounded-lg mb-8">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h3 className="font-semibold text-hotel-dark mb-2 font-secondary">Comment ça marche ?</h3>
              <p className="text-gray-700 text-sm">
                Remplissez le formulaire ci-dessous et cliquez sur "Envoyer la réservation". 
                Vous serez redirigé vers WhatsApp où vous pourrez finaliser votre réservation 
                directement avec notre équipe.
              </p>
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
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
              placeholder="Votre nom complet"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-hotel-dark">
              Numéro de téléphone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
              placeholder="+229 XX XX XX XX"
            />
          </div>

          <div>
            <label htmlFor="roomType" className="block text-sm font-semibold mb-2 text-hotel-dark">
              Type de chambre *
            </label>
            <select
              id="roomType"
              name="roomType"
              required
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
            >
              <option value="">Sélectionnez un type de chambre</option>
              {rooms.map((room) => (
                <option key={room.value} value={room.value}>
                  {room.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="checkIn" className="block text-sm font-semibold mb-2 text-hotel-dark">
                Date d'arrivée *
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                required
                min={today}
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="checkOut" className="block text-sm font-semibold mb-2 text-hotel-dark">
                Date de départ *
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                required
                min={formData.checkIn || today}
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-semibold mb-2 text-hotel-dark">
              Nombre de personnes *
            </label>
            <select
              id="guests"
              name="guests"
              required
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'personne' : 'personnes'}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-hotel-gold text-hotel-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-smooth flex items-center justify-center"
            >
              <span className="mr-2">💬</span>
              Envoyer la réservation via WhatsApp
            </button>
          </div>

          <p className="text-sm text-gray-600 text-center">
            En cliquant sur le bouton, vous serez redirigé vers WhatsApp pour finaliser votre réservation
          </p>
        </form>

        {/* Alternative Contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Préférez-vous nous appeler directement ?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:+229XXXXXXXXX`}
              className="inline-flex items-center bg-hotel-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-smooth"
            >
              <span className="mr-2">📞</span>
              Appeler maintenant
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-smooth"
            >
              <span className="mr-2">💬</span>
              Ouvrir WhatsApp
            </a>
          </div>
        </div>

        {/* Room Preview */}
        {formData.roomType && (
          <div className="mt-8 bg-hotel-light p-6 rounded-lg">
            <h3 className="font-semibold text-hotel-dark mb-2 font-secondary">Chambre sélectionnée :</h3>
            <p className="text-gray-700">
              {rooms.find((r) => r.value === formData.roomType)?.label}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Reservation


