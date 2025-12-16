import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import doodleBg from '../assets/doodle.jpg'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring" }
    }
  }

  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-24 lg:pt-28 font-sans relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER - Consistent with Services.jsx */}
        <PageHeader
          title="À propos de nous"
          description="L'excellence hôtelière au cœur de Kétou."
        />

        <div className="lg:px-8 -mt-16 md:-mt-20 relative z-10">

          {/* SECTION TITRE & INTRO */}
          <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-hotel-gold font-bold tracking-widest uppercase text-sm mb-4"
            >
              Notre Identité
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-hotel-dark mb-6 font-primary leading-tight"
            >
              Révéler notre Vision, nos Valeurs et notre Passion
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              <span className="font-bold">CITY HOTEL KÉTOU</span> est un établissement moderne et élégant situé au cœur de Kétou, ville historique du Bénin. Depuis notre ouverture, nous avons à cœur d’offrir à nos clients un hébergement alliant confort, hospitalité et qualité de service.
              <br />
              Notre hôtel propose des chambres soigneusement aménagées, un restaurant servant une cuisine locale et internationale, ainsi que divers services pensés pour votre bien-être.
            </motion.p>
          </div>

          {/* ===== SECTION VALEURS + MISSION/VISION (FULL WIDTH) ===== */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-32">

            {/* DOODLE BACKGROUND */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url(${doodleBg})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '350px'
              }}
            />

            {/* ===== VALEURS (FLOATING CARD) ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="
                bg-hotel-dark 
                rounded-[2.5rem] 
                p-10 md:p-16 
                text-white 
                shadow-2xl 
                relative 
                z-20 
                mx-auto 
                max-w-5xl
              "
            >
              {/* Decorative Blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-hotel-gold opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center relative z-10 items-start">

                {/* Valeur 1 */}
                <div className="group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-white/20 flex items-center justify-center text-hotel-gold group-hover:bg-hotel-gold group-hover:text-hotel-dark transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold font-secondary">Sécurité</h3>
                </div>

                {/* Valeur 2 (Décalé) */}
                <div className="group mt-8 lg:mt-20">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-white/20 flex items-center justify-center text-hotel-gold group-hover:bg-hotel-gold group-hover:text-hotel-dark transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold font-secondary">Efficacité</h3>
                </div>

                {/* Valeur 3 (Décalé) */}
                <div className="group mt-8 lg:mt-20">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-white/20 flex items-center justify-center text-hotel-gold group-hover:bg-hotel-gold group-hover:text-hotel-dark transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold font-secondary">Précision</h3>
                </div>

                {/* Valeur 4 */}
                <div className="group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-white/20 flex items-center justify-center text-hotel-gold group-hover:bg-hotel-gold group-hover:text-hotel-dark transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold font-secondary">Innovation</h3>
                </div>

              </div>
            </motion.div>

            <br /><br /><br /><br /><br /><br />

            {/* ===== MISSION & VISION (OVERLAP) ===== */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
                bg-white 
                rounded-[3rem] 
                p-10 md:p-20 
                pt-[260px] 
                -mt-48 
                shadow-xl 
                max-w-6xl 
                mx-auto 
                relative 
                z-10
              "
            >
              <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">

                {/* Vision */}
                <div className="flex gap-6 p-8 md:pr-12">
                  <div className="shrink-0 pt-1">
                    <svg className="w-10 h-10 text-hotel-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-hotel-dark mb-4 font-secondary">Notre Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Devenir la destination privilégiée à Kétou en redéfinissant les standards de l'hospitalité locale. Nous aspirons à créer un lieu où tradition et modernité se rencontrent pour offrir des souvenirs inoubliables.
                    </p>
                  </div>
                </div>

                {/* LIGNE VERTICALE */}
                <div className="hidden md:flex justify-center relative">
                  <div className="w-px h-full bg-gray-300 absolute top-0 bottom-0"></div>
                </div>

                {/* Mission */}
                <div className="flex gap-6 p-8 md:pl-12">
                  <div className="shrink-0 pt-1">
                    <svg className="w-10 h-10 text-hotel-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-hotel-dark mb-4 font-secondary">Notre Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      S'appuyer sur notre expertise et notre passion pour offrir un confort absolu et un service personnalisé, garantissant à chaque visiteur de se sentir chez lui, loin de chez lui.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* SECTION HISTOIRE (Ajout supplémentaire pour garder du contenu) */}
          <div className="max-w-4xl mx-auto mt-24 text-center">
            <h2 className="text-3xl font-bold text-hotel-dark mb-6 font-secondary">Une Histoire Riche</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Fondé avec l’ambition d’offrir un hébergement de qualité dans la région de Kétou, <span className="font-bold">CITY HOTEL KÉTOU</span> est né pour répondre aux besoins croissants d’accueil dans cette ville en plein essor.
              <br />
              Au fil des années, nous avons développé nos installations et perfectionné nos services afin de garantir un haut niveau de confort et une hospitalité authentique. Cette démarche nous a permis de nous imposer comme une référence hôtelière à Kétou.
              <br />
              Aujourd’hui, nous accueillons avec fierté des voyageurs venus d’horizons divers, séduits par notre approche personnalisée et l’attention portée à chaque séjour.
            </p>
          </div>

        </div>
      </div>
    </div >
  )
}

export default About
