import React, { useEffect, useRef, useState } from 'react'
import ThumbnailCard from './ThumbnailCard'

const sample = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: `Trọn bộ ví dụ ${i + 1}`,
  subtitle: `${8 + ((i * 5) % 30)} tập`,
  img: `https://picsum.photos/300/420?random=${i + 10}`,
  top: i < 3 ? 'TOP 10' : null,
  tag: i % 2 === 0 ? 'Miễn Phí Có Hạn' : 'Chỉ Có Trên iQIYI'
}))

export default function RecommendedCarousel({ title = 'Section', items = [], viewMorePosition = 'right', showAll = true, loading = false }) {
  const railRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const el = railRef.current
    if (!el) return

    function update() {
      setCanScrollLeft(el.scrollLeft > 8)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [items])
  if (!items || items.length === 0) {
    if (!loading) return null
  }

  const showViewMore = showAll && items.length > 4

  return (
    <section aria-label={title} className="container mx-auto px-4 mt-10 mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>

        {/* view more pill placed left or right (when active) */}
        {showViewMore && viewMorePosition === 'left' && (
          <div className="flex items-center gap-3 order-first mr-3">
            <button
              aria-label={`View more ${title}`}
              className="text-sm bg-emerald-300 text-black px-3 py-1 rounded-full font-semibold shadow-sm"
              onClick={() => railRef.current?.scrollBy({ left: -420, behavior: 'smooth' })}
            >
              ◀︎
            </button>
          </div>
        )}

        {/* Only show a single 'Xem thêm' pill on left or right — removed duplicated pills */}

        {showViewMore && viewMorePosition === 'right' && (
          <div className="flex items-center gap-3 ml-3">
            <button
              aria-label={`View more ${title}`}
              className="text-sm bg-emerald-300 text-black px-3 py-1 rounded-full font-semibold shadow-sm"
              onClick={() => railRef.current?.scrollBy({ left: 420, behavior: 'smooth' })}
            >
              ▶︎
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        <div className="relative">
          <div ref={railRef} className="overflow-x-auto scroll-smooth scrollbar-hide" tabIndex={0} role="list">
            <div className="flex gap-4 pb-4 snap-x snap-proximity items-stretch">
              {(loading ? sample.slice(0, 6) : (items || sample)).map((s) => (
                <div key={s.id} role="listitem" className="min-w-[200px] lg:min-w-[220px] snap-start">
                  <div className="relative h-full">
                    {loading ? (
                      <div className="min-h-[150px] lg:min-h-[200px] bg-neutral-800/40 rounded-lg animate-pulse" />
                    ) : (
                      <ThumbnailCard title={s.title} subtitle={s.subtitle} img={s.img} topTag={s.top} smallTag={s.tag} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* left / right scroll controls - only show when needed */}
          {canScrollLeft && (
            <button
              aria-label="Scroll left"
              onClick={() => railRef.current?.scrollBy({ left: -420, behavior: 'smooth' })}
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/8 items-center justify-center text-white/90 hover:scale-105 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
          )}

          {canScrollRight && (
            <button
              aria-label="Scroll right"
              onClick={() => railRef.current?.scrollBy({ left: 420, behavior: 'smooth' })}
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/8 items-center justify-center text-white/90 hover:scale-105 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          )}

        </div>
      </div>
    </section>
  )
}
