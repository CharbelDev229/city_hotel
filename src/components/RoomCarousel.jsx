import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const RoomCarousel = ({ images, name }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity
    }

    const paginate = (newDirection) => {
        setDirection(newDirection)
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection
            if (nextIndex < 0) nextIndex = images.length - 1
            if (nextIndex >= images.length) nextIndex = 0
            return nextIndex
        })
    }

    return (
        <div className="relative w-full h-[400px] lg:h-full overflow-hidden group">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${name} - Vue ${currentIndex + 1}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1)
                        }
                    }}
                    className="absolute w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 backdrop-blur-sm text-hotel-dark p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                onClick={(e) => {
                    e.preventDefault() // Prevent link navigation if inside a link
                    paginate(-1)
                }}
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/80 backdrop-blur-sm text-hotel-dark p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                onClick={(e) => {
                    e.preventDefault()
                    paginate(1)
                }}
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.preventDefault()
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default RoomCarousel
