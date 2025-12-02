import React from 'react'

// Premium, lightweight SVG illustration — no external deps. Purely presentational.
export default function Space404({ className = 'w-full h-auto', decorative = true }) {
  return (
    <svg viewBox="0 0 600 360" className={className} xmlns="http://www.w3.org/2000/svg" role={decorative ? 'presentation' : 'img'} aria-hidden={decorative} aria-label={decorative ? undefined : 'Decorative space illustration for 404'}>
      <defs>
        <radialGradient id="glow" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#1f2937" stopOpacity="0.08" />
          <stop offset="70%" stopColor="#0b1220" stopOpacity="0.9" />
        </radialGradient>
        <linearGradient id="planet" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#8dd3c7" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>

      {/* soft background gradient */}
      <rect width="100%" height="100%" fill="url(#glow)" />

      {/* orbit ring */}
      <g className="orbit" transform="translate(300 160)">
        <ellipse rx="170" ry="70" fill="none" stroke="#ffffff14" strokeWidth="1" />
        <g className="satellite" transform="rotate(0)">
          <circle cx="-170" cy="0" r="6" fill="#ffd166" />
        </g>
        <g className="satellite" transform="rotate(90)">
          <rect x="-6" y="60" width="12" height="18" rx="3" fill="#7dd3fc" />
        </g>
      </g>

      {/* planet */}
      <g transform="translate(420 170)">
        <circle r="64" fill="url(#planet)" />
        <g className="planet-shine" opacity="0.45">
          <ellipse rx="34" ry="12" fill="#ffffff" transform="translate(-8 -18) rotate(-12)" />
        </g>
      </g>

      {/* small star field */}
      <g className="stars" fill="#fff">
        <circle cx="72" cy="42" r="1.4" opacity="0.85" />
        <circle cx="112" cy="96" r="1.6" opacity="0.9" />
        <circle cx="206" cy="48" r="1.2" opacity="0.85" />
        <circle cx="320" cy="28" r="1.1" opacity="0.7" />
        <circle cx="540" cy="86" r="1.4" opacity="0.8" />
      </g>

      {/* floating decals */}
      <g className="float-pop" transform="translate(160 240)">
        <rect x="-42" y="-18" rx="10" width="84" height="36" fill="#0b1220" opacity="0.06" />
        <circle r="6" cx="0" cy="0" fill="#fca5a5" />
      </g>
    </svg>
  )
}
