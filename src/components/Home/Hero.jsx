import React, { useEffect, useRef, useState } from 'react'
import heroItems from './heroData'
import HeroSlide from './HeroSlide'
import ThumbnailCard from './ThumbnailCard'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)
  const slides = heroItems
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    // autoplay slide rotation
    if (timerRef.current) clearInterval(timerRef.current)
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length)
      }, 7000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, slides.length])
  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="slideshow"
      className="relative h-[68vh] md:h-[76vh] lg:h-[86vh] overflow-hidden bg-gradient-to-b from-[#0b0b0b]/40 to-transparent"
    >
      {/* Background image with subtle kenburns effect */}
      {/* animated slide backgrounds */}
      {/* background slides (soft fade, kenburns effect) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {slides.map((s, i) => (
          <HeroSlide key={s.id} slide={s} active={i === index} />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex items-end lg:items-center">
        <div className="max-w-[720px] pb-12 lg:pb-32 text-white transform translate-y-6 animate-fade-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-emerald-400 text-black px-2 py-1 rounded-full font-semibold">Miễn phí</span>
            <span className="text-xs bg-neutral-800/50 px-2 py-1 rounded-full">TOP 2</span>
            <span className="text-xs bg-neutral-800/50 px-2 py-1 rounded-full">Chỉ Có Trên</span>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2ea6ff] to-[#5dd9a6] flex items-center justify-center text-white shadow-md">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 12l4-4 4 4" /><path d="M12 20V4" /></svg>
            </div>
            <h2 className="sr-only" aria-live="polite">Slide {index + 1} of {slides.length}</h2>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-tight tracking-tight">{slides[index].title}</h1>
          </div>
          <p className="mt-4 text-neutral-300/80 max-w-2xl text-lg">{slides[index].subtitle} — <span className="font-semibold">{slides[index].episodes} tập</span></p>

          <div className="mt-6 flex items-center gap-4">
            <button aria-label={`Play ${slides[index].title}`} className="flex items-center gap-3 bg-gradient-to-tr from-emerald-300 to-emerald-500 hover:from-emerald-400 hover:to-emerald-600 transition px-6 py-3 rounded-full text-black font-semibold shadow-[0_18px_60px_rgba(16,185,129,0.08)] transform-gpu hover:scale-[1.03]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black"><path d="M8 5v14l11-7z"/></svg>
              Phát "{slides[index].title}"
            </button>

            <button aria-label="Add to list" className="bg-white/6 hover:bg-white/10 transition px-4 py-3 rounded-full text-sm font-medium border border-white/10">Thêm vào danh sách</button>
          </div>

          <div className="mt-6 flex gap-3 items-center text-sm text-neutral-300/90">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/6 backdrop-blur-sm">{slides[index].subtitle}</div>
            <div className="px-3 py-2 rounded-xl bg-white/6 backdrop-blur-sm">{slides[index].tagPill}</div>
            <div className="px-3 py-2 rounded-xl bg-white/6 backdrop-blur-sm">{slides[index].badge}</div>
          </div>
        </div>

        {/* Right overlay play-circle (for visual parity) */}
        <div className="absolute right-6 bottom-8 hidden md:block">
          <div className="w-32 h-32 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 transform-gpu hover:scale-105 transition shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
            <div className="w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center animate-pulse-cta shadow-lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="black" className="transform translate-x-[1px]"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom thumbnails / small slider to mimic iQIYI style */}
      <div className="absolute bottom-0 left-0 right-0 pb-6">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-3xl px-4 py-6 border-t border-white/5">
            <div className="overflow-hidden">
              <div className="flex gap-4 -translate-x-0 animate-scroll-cards will-change-transform">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="relative">
                    <div className="min-w-[150px] lg:min-w-[186px]">
                      {/* reuse same card look as other lists */}
                      <div className="relative min-w-[150px] lg:min-w-[186px] bg-neutral-900/55 backdrop-blur-sm rounded-lg overflow-hidden shadow-md border border-white/5 hover:scale-[1.02] transition-transform duration-200">
                        <div
                          className="h-[110px] lg:h-[140px] bg-cover bg-center"
                          style={{ backgroundImage: `url(https://picsum.photos/420/620?random=${i + 1})` }}
                        />
                        {i < 4 && (
                          <span className="absolute left-2 top-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-300 text-black font-semibold">TOP 10</span>
                        )}
                        <div className="absolute right-2 top-2 text-xs bg-black/40 px-2 py-0.5 rounded text-white/90">Trọn bộ</div>
                        <div className="p-3 text-white text-sm leading-tight">
                          <div className="font-semibold">Sample title {i + 1}</div>
                          <div className="text-xs text-neutral-400/80 mt-1">Trọn bộ • {slides[i % slides.length].episodes} tập</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right slider arrow (decorative) */}
      {/* slider arrows */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 items-end">
        <div className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/90 hover:scale-105 transition cursor-pointer" onClick={() => setIndex((prev) => (prev + 1) % slides.length)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
        </div>
        <div className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/90 hover:scale-105 transition cursor-pointer" onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6"/></svg>
        </div>
      </div>
      {/* Remove stray closing element - corrected */}
      {/* small paging dots */}
      <div className="absolute right-6 top-6 hidden sm:flex flex-col gap-2 items-end z-30">
        {slides.map((s, i) => (
          <div key={s.id} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-white/80 scale-125' : 'bg-white/20'} transition-all cursor-pointer`} />
        ))}
      </div>
    </section>
  )
}
