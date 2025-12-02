import React from 'react'

export default function Loading({ fullScreen = false }) {
  return (
    <div className={`${fullScreen ? 'min-h-[60vh] flex items-center justify-center' : ''}`}>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-t-emerald-400 border-neutral-800 animate-spin" />
        <div>
          <div className="h-3 w-40 bg-gradient-to-r from-neutral-700 to-neutral-600 rounded-full animate-pulse" />
          <div className="h-2 w-24 bg-neutral-700 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
