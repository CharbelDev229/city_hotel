import { motion } from 'framer-motion'

const services = [
    "Restauration Gastronomique",
    "Service de Chambre 24/7",
    "Wi-Fi Haut Débit Gratuite",
    "Salles de Conférence",
    "Parking Sécurisé & Gratuit",
    "Bar & Cocktails",
    "Organisation de Mariages",
    "Blanchisserie Express",
    "Réception Ouverte 24h/24",
    "Navette Aéroport"
]

function ServiceTicker() {
    return (
        <div className="bg-hotel-dark text-white py-3 overflow-hidden relative z-20 border-t border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-hotel-dark via-transparent to-hotel-dark z-10 pointer-events-none"></div>
            <motion.div
                className="flex whitespace-nowrap items-center"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30
                }}
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center mx-8">
                                <span className="text-hotel-gold mr-3">✦</span>
                                <span className="text-sm font-medium tracking-wider uppercase font-secondary">
                                    {service}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default ServiceTicker
