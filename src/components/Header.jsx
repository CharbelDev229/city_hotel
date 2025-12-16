import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/chambres', label: 'Chambres' },
    { path: '/services', label: 'Services' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : (isHome ? 'bg-transparent' : 'bg-white shadow-md')}`}>
      {/* Top Utility Bar - Hidden on scroll to save space, visible always at top */}
      <div className={`bg-hotel-dark text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
        <div className="container mx-auto px-4 h-full flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <a href="tel:+2290120234567" className="text-white hover:text-hotel-gold transition-colors">+229 01 20 23 45 67</a>
              <a href="tel:+2290120234567" className="text-white hover:text-hotel-gold transition-colors">+229 01 20 23 45 67</a>
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <svg className="w-6 h-6 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Kétou, Plateau, Bénin
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <a href="#" className="hover:text-hotel-gold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="hover:text-hotel-gold transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="hover:text-hotel-gold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group text-hotel-dark">
              <div className="w-10 h-10 bg-hotel-dark rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h1 className={`text-xl font-bold font-secondary leading-tight ${isHome && !isScrolled ? 'text-white drop-shadow-md' : 'text-hotel-dark'}`}>
                  CITY HOTEL <span className="text-hotel-gold">KÉTOU</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-smooth font-medium text-sm tracking-wide ${isActive(link.path)
                    ? 'text-hotel-gold font-bold'
                    : (isHome && !isScrolled ? 'text-white/90 hover:text-white hover:drop-shadow-sm' : 'text-hotel-dark hover:text-hotel-gold')
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/reservation"
                className="bg-hotel-gold text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-smooth shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Réserver
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden focus:outline-none p-2 rounded-lg transition-smooth ${isHome && !isScrolled ? 'text-white' : 'text-hotel-dark hover:bg-gray-100'}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-gray-100 pt-4 bg-white rounded-xl shadow-2xl p-4 absolute left-4 right-4 top-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-smooth font-medium ${isActive(link.path)
                    ? 'bg-hotel-gold text-white font-semibold'
                    : 'text-hotel-dark hover:bg-gray-50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservation"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-hotel-gold text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-smooth"
              >
                Réserver
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Header


