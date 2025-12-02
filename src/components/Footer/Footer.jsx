import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-t from-black/80 to-transparent py-10 text-neutral-300 text-sm">
      <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-3">
        <div>
          <div className="text-lg font-semibold text-white">iQIYI — Demo</div>
          <div className="mt-3 text-neutral-400 max-w-md">Mẫu giao diện demo — nội dung giả lập. Thay thế bằng dữ liệu thật để triển khai.</div>
        </div>

        <div className="flex gap-6 justify-between lg:justify-center">
          <div>
            <div className="font-medium text-white/90">Công ty</div>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li>Giới thiệu</li>
              <li>Tuyển dụng</li>
              <li>Liên hệ</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-white/90">Hỗ trợ</div>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li>FAQ</li>
              <li>Điều khoản</li>
              <li>Quyền riêng tư</li>
            </ul>
          </div>
        </div>

        <div className="text-right hidden lg:block text-neutral-400">
          © {new Date().getFullYear()} iQIYI clone — Demo project. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
