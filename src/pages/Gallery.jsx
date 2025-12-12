import { useState } from 'react'
import PageHeader from '../components/PageHeader'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      category: 'Chambres',
      title: 'Chambre Standard',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      category: 'Chambres',
      title: 'Chambre Deluxe',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
      category: 'Chambres',
      title: 'Suite VIP',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
      category: 'Restaurant',
      title: 'Salle à manger',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
      category: 'Restaurant',
      title: 'Cuisine',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
      category: 'Extérieur',
      title: 'Façade de l\'hôtel',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      category: 'Extérieur',
      title: 'Hall d\'entrée',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
      category: 'Services',
      title: 'Salle de conférence',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
      category: 'Chambres',
      title: 'Salle de bain',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
      category: 'Extérieur',
      title: 'Terrasse',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
      category: 'Services',
      title: 'Réception',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
      category: 'Chambres',
      title: 'Chambre avec vue',
    },
  ]

  const categories = ['Tous', 'Chambres', 'Restaurant', 'Extérieur', 'Services']
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filteredImages =
    activeCategory === 'Tous'
      ? images
      : images.filter((img) => img.category === activeCategory)

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <PageHeader
          title="Galerie"
          description="Découvrez notre hôtel en images et laissez-vous séduire par l'élégance de nos espaces"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-smooth ${
                activeCategory === category
                  ? 'bg-hotel-gold text-hotel-dark'
                  : 'bg-hotel-light text-hotel-dark hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-semibold">{image.category}</p>
                  <p className="text-lg font-bold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-hotel-gold transition-smooth z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-white mt-4 text-center">
              <p className="text-sm text-hotel-gold">{selectedImage.category}</p>
              <p className="text-2xl font-bold">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery


