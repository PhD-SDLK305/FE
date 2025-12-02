import React from 'react'
import { Link } from 'react-router-dom'

export default function AccessDenied() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#061018] via-[#071125] to-[#071016] text-white px-6">
      <div className="max-w-2xl text-center">
        <div className="mx-auto w-36 h-36 rounded-full bg-gradient-to-tr from-amber-400/20 to-rose-500/20 backdrop-blur-md flex items-center justify-center soft-shadow mb-6">
          <div className="text-5xl font-bold">⚠️</div>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-2">Access Denied</h1>
        <p className="text-neutral-300/80 text-lg mb-6">Bạn không có quyền truy cập vào trang này. Vui lòng đăng nhập hoặc liên hệ quản trị để được cấp quyền.</p>

        <div className="flex justify-center gap-4">
          <Link to="/signin" className="px-5 py-3 rounded-full bg-emerald-400 text-black font-semibold hover:scale-[1.02] transition">Đăng nhập</Link>
          <Link to="/home" className="px-5 py-3 rounded-full border border-white/10 text-neutral-200 hover:bg-white/5 transition">Về trang chủ</Link>
        </div>
      </div>
    </div>
  )
}
