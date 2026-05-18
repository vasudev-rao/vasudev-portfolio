'use client'

import { useTheme } from '@/components/ui/ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg
        border border-white/10 dark:border-white/10 dark:bg-white/[0.04]
        light:border-black/10 bg-black/[0.04]
        hover:bg-white/[0.08] dark:hover:bg-white/[0.08]
        hover:border-blue-400/40 transition-all duration-200 group"
    >
      {/* Sun icon — shown in dark mode (click to go light) */}
      <Sun
        size={16}
        className={`absolute transition-all duration-300 text-blue-300
          ${theme === 'dark'
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 rotate-90 scale-50'
          }`}
      />
      {/* Moon icon — shown in light mode (click to go dark) */}
      <Moon
        size={16}
        className={`absolute transition-all duration-300 text-gray-600
          ${theme === 'light'
            ? 'opacity-100 rotate-0 scale-100'
            : 'opacity-0 -rotate-90 scale-50'
          }`}
      />
    </button>
  )
}
