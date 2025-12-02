import React from 'react'

/**
 * ThumbnailCard — small presentational card for thumbnails used across the Home page
 */
export default function ThumbnailCard({ title, subtitle, img, topTag, smallTag }) {
  return (
    <article tabIndex={0} className="relative min-w-[120px] sm:min-w-[150px] lg:min-w-[186px] bg-neutral-900/55 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm border border-white/6 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-transform duration-200" aria-label={title}>
      <div
        className="h-[92px] sm:h-[110px] lg:h-[140px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
        role="img"
        aria-hidden="true"
      />

      {topTag && (
        <div className="absolute left-2 top-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-300 text-black font-semibold leading-none">{topTag}</div>
      )}

      {smallTag && (
        <div className="absolute right-2 top-2 text-xs bg-black/40 px-2 py-0.5 rounded text-white/90 leading-none">{smallTag}</div>
      )}

      <div className="p-3 text-white text-sm leading-tight">
        <div className="font-semibold line-clamp-2">{title}</div>
        {subtitle && <div className="text-xs text-neutral-400/80 mt-1">{subtitle}</div>}
      </div>
    </article>
  )
}
