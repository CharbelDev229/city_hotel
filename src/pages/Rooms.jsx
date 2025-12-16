import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import RoomCarousel from '../components/RoomCarousel'

function Rooms() {
  const rooms = [
    {
      id: 1,
      name: 'Chambre Standard',
      price: '15,000 FCFA',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800'
      ],
      description: 'Chambre confortable et moderne, idéale pour un séjour agréable. Parfaite pour les voyageurs individuels ou les couples.',
      amenities: ['Wi-Fi gratuit', 'Climatisation', 'TV LED', 'Douche privée', 'Sèche-cheveux', 'Bureau'],
      size: '20 m²',
    },
    {
      id: 2,
      name: 'Chambre Deluxe',
      price: '25,000 FCFA',
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800'
      ],
      description: 'Chambre spacieuse avec vue panoramique, équipements premium et espace de détente. Parfaite pour un séjour de luxe.',
      amenities: ['Wi-Fi gratuit', 'Climatisation', 'TV LED 32"', 'Douche privée', 'Minibar', 'Salle de bain complète', 'Balcon'],
      size: '30 m²',
    },
    {
      id: 3,
      name: 'Suite VIP',
      price: '45,000 FCFA',
      images: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800',
        'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800'
      ],
      description: 'Suite luxueuse avec salon privé, chambre séparée et toutes les commodités haut de gamme. L\'expérience ultime du confort.',
      amenities: ['Wi-Fi gratuit', 'Climatisation', 'TV LED 55"', 'Salon privé', 'Minibar', 'Salle de bain avec baignoire', 'Balcon privé', 'Service en chambre'],
      size: '50 m²',
    },
    {
      id: 4,
      name: 'Chambre Familiale',
      price: '35,000 FCFA',
      images: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800'
      ],
      description: 'Chambre spacieuse avec lits supplémentaires, idéale pour les familles. Confort et espace pour tous.',
      amenities: ['Wi-Fi gratuit', 'Climatisation', 'TV LED', '2 lits doubles', 'Douche privée', 'Espace de jeu', 'Réfrigérateur'],
      size: '35 m²',
    },
  ]

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <PageHeader
          title="Nos Chambres"
          description="Découvrez notre sélection de chambres élégantes et confortables, conçues pour répondre à tous vos besoins"
        />

        {/* Rooms Grid */}
        <div className="space-y-16">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-smooth"
            >
              <div className="h-[400px] lg:h-[500px] overflow-hidden relative">
                <RoomCarousel images={room.images} name={room.name} />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-hotel-dark font-secondary">{room.name}</h2>
                  <span className="text-sm text-gray-500">{room.size}</span>
                </div>
                <p className="text-gray-600 mb-6">{room.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-hotel-dark font-secondary">Équipements :</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <span className="text-hotel-gold mr-2">✓</span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <span className="text-3xl font-bold text-hotel-gold">{room.price}</span>
                    <span className="text-gray-500 ml-2">/ nuit</span>
                  </div>
                  <Link
                    to="/reservation"
                    className="bg-hotel-gold text-hotel-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-smooth"
                  >
                    Réserver maintenant
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 mb-20 mx-auto max-w-6xl">
          <div className="fabric-texture text-center py-20 px-8 md:px-16 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-secondary">
                Besoin d'aide pour choisir ?
              </h2>
              <p className="text-lg md:text-xl text-hotel-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Notre équipe est à votre disposition pour vous aider à trouver la chambre parfaite
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-hotel-dark px-10 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-smooth text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Nous contacter
                </Link>
                <Link
                  to="/reservation"
                  className="inline-block bg-hotel-gold text-hotel-dark px-10 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-smooth text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Réserver maintenant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rooms
