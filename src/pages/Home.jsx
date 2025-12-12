import { Link } from 'react-router-dom'
import ServiceTicker from '../components/ServiceTicker'
import FeaturesSlider from '../components/FeaturesSlider'

function Home() {
  const rooms = [
    // ... (keep existing rooms data)
    {
      id: 1,
      name: 'Chambre Standard',
      price: '15,000 FCFA',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      description: 'Chambre confortable avec toutes les commodités essentielles',
    },
    {
      id: 2,
      name: 'Chambre Deluxe',
      price: '25,000 FCFA',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
      description: 'Chambre spacieuse avec vue panoramique et équipements premium',
    },
    {
      id: 3,
      name: 'Suite VIP',
      price: '45,000 FCFA',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
      description: 'Suite luxueuse avec salon privé et toutes les commodités',
    },
  ]



  const testimonials = [
    {
      name: 'Marie K.',
      text: 'Excellent séjour ! Le personnel est très accueillant et les chambres sont impeccables.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/60?img=1',
      source: 'Avis Google',
    },
    {
      name: 'Jean D.',
      text: 'Un hôtel moderne avec tous les équipements nécessaires. Je recommande vivement !',
      rating: 5,
      avatar: 'https://i.pravatar.cc/60?img=2',
      source: 'Glapir',
    },
    {
      name: 'Sophie M.',
      text: 'Service impeccable et emplacement idéal. Parfait pour un séjour à Kétou.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/60?img=3',
      source: 'Avis Google',
    },
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600',
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
  ]

  return (
    <div className="">
      {/* Hero Section (nouveau design) */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Fond image bâtiment */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Overlay sombre pour faire ressortir le texte blanc */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        {/* Dégradé bas pour transition douce */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="relative container mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-20">

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-hotel-gold animate-pulse"></span>
              Bienvenue au City Hotel Kétou
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white font-secondary mb-6 drop-shadow-lg">
              L'Élégance au Cœur <br />
              du <span className="text-transparent bg-clip-text bg-gradient-to-r from-hotel-gold to-yellow-200">Plateau</span>
            </h1>

            <p className="text-xl text-gray-100 max-w-2xl mb-10 leading-relaxed drop-shadow-md">
              Découvrez un havre de paix où le confort moderne rencontre l'hospitalité traditionnelle béninoise.
              Votre séjour inoubliable commence ici.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/reservation"
                className="px-8 py-4 bg-hotel-gold text-hotel-dark rounded-xl font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Réserver votre séjour
              </Link>
              <Link
                to="/chambres"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Découvrir nos suites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <ServiceTicker />

      {/* Nos Chambres Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-hotel-dark font-secondary mb-4">
              Découvrez nos chambres
            </h2>
            <p className="text-gray-600 text-lg">
              Une sélection soignée d’espaces élégants et confortables pour un séjour inoubliable.
            </p>
          </div>

          {/* Filtres visuels (statiques) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-12">
            <button className="px-4 py-2 rounded-full border border-gray-200 bg-gray-900 text-white text-sm font-semibold shadow-sm">
              Toutes les chambres
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm hover:border-gray-300 transition-smooth">
              Standard
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm hover:border-gray-300 transition-smooth">
              Deluxe
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm hover:border-gray-300 transition-smooth">
              Suites
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-[28px] shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition-smooth"
              >
                <div className="relative rounded-2xl overflow-hidden mb-5">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-orange-600">{room.price}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                    / nuit
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-hotel-dark font-secondary mb-2">{room.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{room.description}</p>

                <Link
                  to="/reservation"
                  className="inline-flex items-center justify-center w-full gap-2 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-smooth shadow-md"
                >
                  Réserver
                  <span className="text-sm">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/chambres"
              className="inline-block text-hotel-gold font-semibold hover:underline"
            >
              Voir toutes les chambres →
            </Link>
          </div>
        </div>
      </section>

      <FeaturesSlider />

      {/* Galerie Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-hotel-dark font-secondary mb-2 relative inline-block">
                Galerie
              </h2>
            </div>
            <a
              href="/galerie"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-smooth shadow-md"
            >
              Voir plus {''} {''} {''}
              <span className="text-sm"> → {''} </span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Galerie ${index + 1}`}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-smooth"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-hotel-dark font-secondary mb-2 relative inline-block">
            Témoignages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-smooth"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


