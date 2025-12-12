import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), // Menu/Restaurant -> Replaced with generic 'Menu' or 'Cutlery' look
      title: 'Restaurant',
      description: 'Dégustez une cuisine locale et internationale dans notre restaurant. Menu varié et plats préparés avec des ingrédients frais.',
      details: ['Cuisine locale et internationale', 'Petit-déjeuner buffet', 'Service en chambre disponible', 'Menu végétarien disponible'],
    },
    {
      icon: (
        <svg className="w-16 h-16 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Salle de conférence',
      description: 'Équipée pour vos réunions d\'affaires et événements. Capacité jusqu\'à 50 personnes avec équipements modernes.',
      details: ['Capacité 50 personnes', 'Équipements audiovisuels', 'Wi-Fi haut débit', 'Service traiteur disponible'],
    },
    {
      icon: (
        <svg className="w-16 h-16 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        // Placeholder for laundry - file/service like
      ),
      title: 'Blanchisserie',
      description: 'Service de blanchisserie professionnel pour garder vos vêtements impeccables pendant votre séjour.',
      details: ['Service express disponible', 'Nettoyage à sec', 'Repassage professionnel', 'Retour sous 24h'],
    },
    {
      icon: (
        <svg className="w-16 h-16 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        // Exchange/Transport - using generic arrows for now or car
      ),
      title: 'Parking sécurisé',
      description: 'Parking gratuit et sécurisé pour tous nos clients. Surveillance 24/7 pour votre tranquillité d\'esprit.',
      details: ['Parking gratuit', 'Surveillance 24/7', 'Espaces pour motos et voitures', 'Accès facile'],
    },
    {
      icon: (
        <svg className="w-16 h-16 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Réception 24/7',
      description: 'Notre équipe est disponible 24h/24 et 7j/7 pour répondre à tous vos besoins et vous assister.',
      details: ['Service continu', 'Assistance multilingue', 'Conciergerie', 'Informations touristiques'],
    },
    {
      icon: (
        <svg className="w-16 h-16 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Petit déjeuner inclus',
      description: 'Commencez votre journée avec un petit-déjeuner buffet complet inclus dans votre séjour.',
      details: ['Buffet varié', 'Produits frais locaux', 'Café et thé', 'Service de 6h à 10h'],
    },
  ]

  const restaurantSections = [
    {
      title: "Cuisine Raffinée",
      description: "Notre chef vous propose un voyage culinaire entre tradition locale et saveurs internationales. Découvrez nos spécialités : igname pilée, sauces locales, grillades et plats continentaux.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      items: ["Spécialités locales authentiques", "Cuisine internationale", "Options végétariennes", "Produits frais du marché"]
    },
    {
      title: "Bar & Cocktails",
      description: "Un espace détente élégant pour vos soirées. Dégustez nos cocktails signature, notre sélection de vins ou tout simplement un jus de fruits frais pressé à la minute.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      items: ["Cocktails Signature", "Carte des vins", "Bières locales et importées", "Ambiance musicale feutrée"]
    },
    {
      title: "Traiteur & Événements",
      description: "Pour vos mariages, séminaires ou fêtes privées, notre service traiteur s'occupe de tout. Des menus sur mesure adaptés à vos envies et à votre budget.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      items: ["Service banquet", "Buffets à thème", "Pauses café séminaires", "Gâteaux de célébration"]
    }
  ]

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <PageHeader
          title="Nos Services & Prestations"
          description="Un éventail complet de services pour un séjour sans soucis au City Hotel Kétou"
        />

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-smooth transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center"
            >
              <div className="mb-6 opacity-90">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-center text-hotel-dark font-secondary">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6 text-center text-sm leading-relaxed">{service.description}</p>
              <ul className="space-y-2 w-full">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 text-sm">
                    <span className="text-hotel-gold mr-2 mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Detailed Restauration Section */}
        <div id="restauration" className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hotel-dark mb-4 font-secondary">Gastronomie & Événements</h2>
            <div className="w-24 h-1 bg-hotel-gold mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Le City Hotel Kétou n'est pas seulement un lieu de séjour, c'est aussi une destination gourmande et festive.
            </p>
          </div>

          <div className="space-y-24">
            {restaurantSections.map((section, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>

                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-hotel-dark opacity-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl font-bold text-hotel-dark mb-6 font-secondary">{section.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {section.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-medium">
                        <svg className="w-5 h-5 text-hotel-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link to="/contact" className="inline-block px-8 py-3 bg-hotel-dark text-white rounded-lg hover:bg-hotel-gold hover:text-hotel-dark transition-all duration-300 font-semibold shadow-md">
                      En savoir plus
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 mx-auto max-w-6xl">
          <div className="bg-hotel-gold rounded-3xl p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-hotel-dark mb-6">Prêt à organiser votre événement ?</h2>
              <p className="text-hotel-dark text-lg mb-8 max-w-2xl mx-auto">
                De la simple réservation de table à l'organisation complète de votre mariage, notre équipe est à votre écoute.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact" className="px-8 py-3 bg-hotel-dark text-white rounded-lg font-bold hover:bg-white hover:text-hotel-dark transition-all shadow-lg">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
