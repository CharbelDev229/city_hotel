import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
    {
        id: 1,
        title: "Emplacement Privilégié",
        description: "Situé au cœur de Kétou, notre hôtel offre un accès facile aux sites touristiques et aux centres d'affaires, tout en garantissant un calme absolu.",
        mainImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
        subImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80"
    },
    {
        id: 2,
        title: "Confort & Luxe",
        description: "Des chambres spacieuses et élégamment décorées, équipées de literie premium pour vous assurer des nuits réparatrices dans un cadre raffiné.",
        mainImage: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
        subImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80"
    },
    {
        id: 3,
        title: "Gastronomie Locale",
        description: "Une expérience culinaire unique mettant à l'honneur les saveurs de Kétou revisitées par nos chefs, dans un cadre enchanteur.",
        mainImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        subImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
    },
    {
        id: 4,
        title: "Sécurité Absolue",
        description: "Votre tranquillité est notre priorité. Une équipe de sécurité professionnelle et des systèmes de surveillance veillent sur vous 24h/24.",
        mainImage: "https://images.unsplash.com/photo-1509621547774-56681bc28c92?w=800&q=80",
        subImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
    }
]

function FeaturesSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
    }

    return (
        <section className="py-24 bg-[#FAF7F2] overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-5xl md:text-6xl font-bold text-hotel-dark font-secondary mb-6 leading-tight">
                                Pourquoi choisir <br />
                                <span className="italic text-hotel-gold">City Hotel ?</span>
                            </h2>
                        </motion.div>

                        <div className="h-64 relative"> {/* Fixed height to prevent partial layout shifts */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-3xl font-bold text-gray-800 mb-4 font-secondary">
                                        {features[currentIndex].title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed max-w-md mb-8">
                                        {features[currentIndex].description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-6 mt-4">
                            <button
                                onClick={prevSlide}
                                className="p-4 rounded-full border-2 border-hotel-dark/20 text-hotel-dark hover:bg-hotel-dark hover:text-white transition-all duration-300"
                            >
                                <svg className="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="group flex items-center gap-4 px-8 py-4 rounded-full bg-hotel-dark text-white hover:bg-hotel-gold transition-all duration-300 shadow-lg"
                            >
                                <span className="font-medium tracking-wide">Découvrir</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </motion.div>
                            </button>
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-2 mt-8">
                            {features.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-12 bg-hotel-dark' : 'w-4 bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Overlapping Effect */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="absolute inset-0"
                            >
                                {/* Main Image (Back) */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="absolute right-0 top-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10"
                                >
                                    <img
                                        src={features[currentIndex].mainImage}
                                        alt={features[currentIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </motion.div>

                                {/* Secondary Image (Front/Bottom Left) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50, x: -50 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    exit={{ opacity: 0, y: 50, x: -50 }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="absolute left-0 bottom-12 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl border-8 border-[#FAF7F2] z-20"
                                >
                                    <img
                                        src={features[currentIndex].subImage}
                                        alt="Detail"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-hotel-gold/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 w-32 h-32 border-4 border-hotel-gold opacity-20 rounded-full z-0"></div>
                    </div>

                    {/* Mobile Image (Simplified) */}
                    <div className="lg:hidden relative h-96 rounded-2xl overflow-hidden shadow-xl">
                        <motion.img
                            key={currentIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            src={features[currentIndex].mainImage}
                            alt={features[currentIndex].title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturesSlider
