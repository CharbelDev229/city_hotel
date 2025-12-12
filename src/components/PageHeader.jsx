import React from 'react'

function PageHeader({ title, description }) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70 text-white mb-16 mt-10 lg:mt-14 shadow-2xl">
      {/* Image de fond avec overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1600')] bg-cover bg-center opacity-70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/85 to-transparent" aria-hidden="true" />

      <div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-secondary">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100/90 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageHeader


