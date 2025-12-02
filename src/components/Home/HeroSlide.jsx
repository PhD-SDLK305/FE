import React from 'react'

/**
 * HeroSlide — purely presentational, renders a single hero slide background
 * and passes children overlay from parent. Kept tiny for easy testing.
 */
export default function HeroSlide({ slide, active }) {
  const base = 'absolute inset-0 w-full h-full object-cover object-center transform-gpu transition-opacity duration-700'
  return (
    <div aria-hidden={!active} className={`pointer-events-none ${active ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'}`}>
      <img src={slide.img} alt={slide.title} className={`${base} ${active ? 'animate-hero-soft' : ''}`} />
      {/* a soft layered overlay for comfortable contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent mix-blend-overlay" />
    </div>
  )
}
