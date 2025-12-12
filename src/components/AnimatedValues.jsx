import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const values = [
    {
        id: "01",
        title: "Hospitalité",
        description: "Un accueil chaleureux et un service attentionné pour que vous vous sentiez comme chez vous dès votre arrivée. Notre équipe est dévouée à votre bien-être.",
        tags: ["ACCUEIL", "SERVICE", "CONVIVIALITÉ"]
    },
    {
        id: "02",
        title: "Excellence",
        description: "Nous visons la perfection dans chaque détail, de la propreté des chambres à la qualité de notre cuisine, pour une expérience irréprochable.",
        tags: ["QUALITÉ", "DÉTAIL", "STANDARD ÉLEVÉ"]
    },
    {
        id: "03",
        title: "Durabilité",
        description: "Engagés pour l'environnement, nous adoptons des pratiques éco-responsables pour préserver la beauté de Kétou et de notre planète.",
        tags: ["ÉCOLOGIE", "RESPONSABILITÉ", "AVENIR"]
    },
    {
        id: "04",
        title: "Innovation",
        description: "Toujours à la pointe, nous modernisons constamment nos services et équipements pour vous offrir le meilleur de la technologie et du confort.",
        tags: ["MODERNITÉ", "TECHNOLOGIE", "CONFORT"]
    }
]

function AnimatedValues() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <section ref={containerRef} className="py-20 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-24">
                    <h2 className="text-5xl font-bold text-hotel-dark font-secondary mb-4">Nos Valeurs</h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Les piliers qui soutiennent notre engagement envers vous.
                    </p>
                </div>

                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 top-40 bottom-20 w-1 bg-gray-100 transform -translate-x-1/2 hidden md:block">
                    <motion.div
                        style={{ scaleY, transformOrigin: "top" }}
                        className="w-full h-full bg-hotel-gold"
                    />
                </div>

                <div className="space-y-4 md:space-y-32 relative">
                    {values.map((value, index) => (
                        <ValueCard key={value.id} value={value} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ValueCard({ value, index }) {
    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Content Side */}
            <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-24 text-right' : 'md:pl-24 text-left'}`}>
                <div className="relative group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <span className="absolute -top-10 text-8xl font-bold text-gray-50 opacity-20 pointer-events-none select-none right-4">
                        {value.id}
                    </span>
                    <h3 className="text-3xl font-bold text-hotel-dark mb-4 relative z-10">{value.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed relative z-10">
                        {value.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 relative z-10 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        {value.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-50 text-xs font-bold text-hotel-dark tracking-wider rounded-full border border-gray-200">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Center Point */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white border-2 border-hotel-gold z-10">
                    <div className="w-full h-full rounded-full bg-hotel-gold animate-ping opacity-20"></div>
                </div>
            </div>

            {/* Empty Side for layout balance */}
            <div className="w-full md:w-1/2" />
        </motion.div>
    )
}

export default AnimatedValues
