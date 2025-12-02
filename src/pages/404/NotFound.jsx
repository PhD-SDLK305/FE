
import React from 'react'
import { Link } from 'react-router-dom'
import Space404 from '../../components/Illustrations/Space404'

export function NotFound() {
  return (
    <main className="min-h-[76vh] flex items-center justify-center bg-gradient-to-br from-[#07101a] via-[#071425] to-[#06121a] text-white px-6 py-16">
      {/* decorative floating blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-28 -top-16 w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-700/40 to-sky-500/30 blur-3xl animate-float" />
        <div className="absolute right-8 top-24 w-56 h-56 rounded-full bg-gradient-to-tr from-rose-500/20 to-amber-300/10 blur-2xl animate-float" />
        {/* confetti particles */}
        <div className="confetti one" />
        <div className="confetti two" />
        <div className="confetti three" />
        <div className="confetti four" />
      </div>

      <section className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6">
        <div className="text-left lg:pr-8">
          <div className="mx-auto md:mx-0 w-44 md:w-56 rounded-full bg-gradient-to-tr from-sky-400/6 to-indigo-600/12 backdrop-blur-2xl inline-flex items-center justify-center soft-shadow mb-6 animate-pop delay-150">
            <div className="text-[4.6rem] md:text-[5.6rem] font-extrabold leading-none bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-emerald-300 to-indigo-400">404</div>
          </div>

          <h1 aria-live="polite" aria-atomic="true" className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 animate-pop delay-300">Ôi, không tìm thấy trang này</h1>

          <p className="text-neutral-300/80 max-w-xl mb-6 text-base md:text-lg animate-pop delay-450">Rất tiếc — trang bạn đang tìm có thể đã bị xoá hoặc gõ sai đường dẫn. Tôi đã để một hành tinh nhỏ ở đây để giữ bạn công ty — hoặc bạn có thể quay lại trang chủ.</p>

          <div className="flex flex-wrap gap-3 items-center mb-5 animate-pop delay-600">
            <Link to="/home" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-500 text-black font-semibold transform transition-shadow hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)]">Về trang chủ</Link>
            <Link to="/signin" className="px-4 py-3 rounded-full border border-white/10 text-neutral-200 hover:bg-white/5 transition">Đăng nhập</Link>
            <a href="#" className="px-4 py-3 rounded-full border border-white/6 text-neutral-300/80 hover:bg-white/4 transition">Báo lỗi</a>
          </div>

          <div className="text-sm text-neutral-400/70 animate-pop delay-600">Hoặc thử kiểm tra URL hoặc quay lại trang trước đó — nếu cần, liên hệ bộ phận hỗ trợ của chúng tôi.</div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[380px] lg:max-w-none animate-float">
            <Space404 decorative className="w-full h-auto" />
          </div>
        </div>
      </section>
    </main>
  )
}