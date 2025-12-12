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
            <a href="#" className="hover:text-hotel-gold transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-hotel-gold transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.717.01 3.653.047 1.004.05 1.795.215 2.61.596.79.376 1.45.935 2.003 1.489.554.554 1.113 1.213 1.489 2.003.381.815.546 1.61.596 2.61.037.936.047 1.223.047 3.653s-.01 2.717-.047 3.653c-.05.994-.215 1.785-.596 2.61-.376.79-.935 1.45-1.489 2.003-.554.554-1.213 1.113-2.003 1.489-.815.381-1.61.546-2.61.596-.936.037-1.223.047-3.653.047s-2.717-.01-3.653-.047c-.994-.05-1.785-.215-2.61-.596-.79-.376-1.45-.935-2.003-1.489-.554-.554-1.113-1.213-1.489-2.003-.381-.815-.546-1.61-.596-2.61-.037-.936-.047-1.223-.047-3.653s.01-2.717.047-3.653c.05-.994.215-1.785.596-2.61.376-.79.935-1.45 1.489-2.003.554-.554 1.213-1.113 2.003-1.489.815-.381 1.61-.546 2.61-.596.936-.037 1.223-.047 3.653-.047zm0 1.889c-2.915 0-3.285.012-4.44.064-1.07.047-1.73.247-2.228.484-.505.242-.928.566-1.34.978-.412.412-.736.835-.978 1.34-.237.498-.437 1.158-.484 2.228-.052 1.155-.064 1.525-.064 4.44s.012 3.285.064 4.44c.047 1.07.247 1.73.484 2.228.242.505.566.928.978 1.34.412.412.835.736 1.34.978.498.237 1.158.437 2.228.484 1.155.052 1.525.064 4.44.064s3.285-.012 4.44-.064c1.07-.047 1.73-.247 2.228-.484.505-.242.928-.566 1.34-.978.412-.412.736-.835.978-1.34.237-.498.437-1.158.484-2.228.052-1.155.064-1.525.064-4.44s-.012-3.285-.064-4.44c-.047-1.07-.247-1.73-.484-2.228-.242-.505-.566-.928-.978-1.34-.412-.412-.835-.736-1.34-.978-.498-.237-1.158-.437-2.228-.484-1.155-.052-1.525-.064-4.44-.064zm0 3.657c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 1.889c-1.766 0-3.111 1.345-3.111 3.111s1.345 3.111 3.111 3.111 3.111-1.345 3.111-3.111-1.345-3.111-3.111-3.111zm6.807-5.022c-.757 0-1.376.619-1.376 1.376s.619 1.376 1.376 1.376 1.376-.619 1.376-1.376-.619-1.376-1.376-1.376z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-hotel-gold transition-colors">
              <svg className="w-6 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2.2c-5.46 0-9.9 4.44-9.9 9.9 0 1.77.46 3.45 1.26 4.95L2.08 22l5.02-1.32c1.44.79 3.08 1.26 4.94 1.26 5.46 0 9.9-4.44 9.9-9.9s-4.44-9.9-9.9-9.9zm4.65 14.5c-.23.15-.5.2-.77.2-.27 0-.54-.05-.77-.2l-1.8-1.05c-.14-.08-.3-.12-.46-.12-.16 0-.32.04-.46.12l-1.8 1.05c-.23.15-.5.2-.77.2-.27 0-.54-.05-.77-.2-.46-.3-.77-.8-.77-1.35V9.6c0-.55.31-1.05.77-1.35.23-.15.5-.2.77-.2.27 0-.54-.05-.77-.2l1.8 1.05c.14.08.3.12.46.12.16 0 .32-.04.46-.12l1.8-1.05c.23-.15.5-.2.77-.2.27 0-.54-.05-.77-.2.46.3.77.8.77 1.35v5.5c0 .55-.31 1.05-.77 1.35z" />
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


