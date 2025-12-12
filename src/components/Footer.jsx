import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-hotel-dark text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-hotel-gold font-primary">CITY HOTEL KÉTOU</h3>
            <p className="text-hotel-light text-sm">
              Votre confort, notre priorité. Découvrez un séjour exceptionnel au cœur de Kétou.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-secondary">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-hotel-light hover:text-hotel-gold transition-smooth">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/chambres" className="text-hotel-light hover:text-hotel-gold transition-smooth">
                  Chambres
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-hotel-light hover:text-hotel-gold transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-hotel-light hover:text-hotel-gold transition-smooth">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-secondary">Contact</h4>
            <ul className="space-y-2 text-sm text-hotel-light">
              <li>
                <a
                  href="https://wa.me/229XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-hotel-gold transition-smooth"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+229XXXXXXXXX" className="hover:text-hotel-gold transition-smooth">
                +229 XX XX XX XX
                </a>
              </li>
              <li>Kétou,Calvaire, Bénin</li>
            </ul>
          </div>

          {/* Reservation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-secondary">Réservation</h4>
            <p className="text-hotel-light text-sm mb-4">
              Réservez votre chambre dès maintenant et profitez de nos offres spéciales.
            </p>
            <Link
              to="/reservation"
              className="inline-block bg-hotel-gold text-hotel-dark px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-smooth"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-hotel-light">
          <p>&copy; {new Date().getFullYear()} CITY HOTEL KÉTOU. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


