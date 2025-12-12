import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import AnimatedValues from '../components/AnimatedValues'

function About() {
  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <PageHeader
          title="À propos de nous"
          description="Découvrez l'histoire et les valeurs de CITY HOTEL KÉTOU"
        />

        {/* Hero Image */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920"
            alt="CITY HOTEL KÉTOU"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Présentation */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-hotel-dark font-secondary">Notre Hôtel</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                CITY HOTEL KÉTOU est un établissement moderne et élégant situé au cœur de Kétou,
                une ville historique du Bénin. Depuis notre ouverture, nous nous engageons à offrir
                à nos clients une expérience d'hébergement exceptionnelle alliant confort,
                hospitalité et service de qualité.
              </p>
              <p>
                Notre hôtel dispose de chambres confortables et bien équipées, d'un restaurant
                proposant une cuisine locale et internationale, ainsi que de nombreux services
                pour rendre votre séjour agréable et mémorable.
              </p>
              <p>
                Que vous soyez en voyage d'affaires ou en vacances, notre équipe dévouée est là
                pour répondre à tous vos besoins et vous faire découvrir les merveilles de Kétou
                et de ses environs.
              </p>
            </div>
          </div>
        </section>

        {/* Histoire */}
        <section className="mb-16 bg-hotel-light p-12 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-hotel-dark font-secondary">Notre Histoire</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Fondé avec la vision de créer un espace d'accueil de qualité dans la région de Kétou,
                CITY HOTEL KÉTOU a ouvert ses portes pour répondre aux besoins croissants d'hébergement
                dans cette ville dynamique.
              </p>
              <p>
                Depuis nos débuts, nous avons constamment amélioré nos installations et nos services
                pour offrir à nos clients une expérience toujours meilleure. Notre engagement envers
                l'excellence et l'hospitalité authentique nous a permis de devenir une référence
                dans l'hôtellerie à Kétou.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers de compter parmi nos clients des voyageurs du monde
                entier qui apprécient notre approche personnalisée et notre dévouement à leur confort.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h2 className="text-2xl font-bold mb-4 text-center text-hotel-dark font-secondary">Notre Mission</h2>
              <p className="text-gray-700 text-center">
                Offrir à chaque client une expérience d'hébergement exceptionnelle en combinant
                confort, service de qualité et hospitalité authentique. Nous nous engageons à créer
                un environnement accueillant où chaque visiteur se sent chez lui.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="text-5xl mb-4 text-center">👁️</div>
              <h2 className="text-2xl font-bold mb-4 text-center text-hotel-dark font-secondary">Notre Vision</h2>
              <p className="text-gray-700 text-center">
                Devenir la référence de l'hôtellerie à Kétou en étant reconnu pour notre excellence
                opérationnelle, notre engagement envers le développement durable et notre contribution
                positive à la communauté locale.
              </p>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <AnimatedValues />

        {/* Localisation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-hotel-dark font-secondary">Notre Localisation</h2>
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
                title="Localisation CITY HOTEL KÉTOU"
              ></iframe>
            </div>
            <div className="p-6 bg-hotel-light">
              <h3 className="text-xl font-bold mb-2 text-hotel-dark font-secondary">Adresse</h3>
              <p className="text-gray-700 mb-4">
                CITY HOTEL KÉTOU<br />
                Kétou, Bénin
              </p>
              <p className="text-sm text-gray-600">
                Situé au cœur de Kétou, notre hôtel est facilement accessible et proche des principaux
                points d'intérêt de la ville.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 mb-20 mx-auto max-w-6xl">
          <div className="fabric-texture text-center py-20 px-8 md:px-16 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-secondary">
                Prêt à découvrir CITY HOTEL KÉTOU ?
              </h2>
              <p className="text-lg md:text-xl text-hotel-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Réservez votre séjour dès maintenant et profitez de notre hospitalité exceptionnelle
              </p>
              <Link
                to="/reservation"
                className="inline-block bg-hotel-gold text-hotel-dark px-10 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-smooth shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About


