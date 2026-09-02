'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Tracker() {
  const pathname = usePathname()

  useEffect(() => {
    const site = process.env.NEXT_PUBLIC_SITE_NAME || 'portfolio'
    const raw = (pathname || '/').replace(/^\//, '') || 'home'
    const card = raw.replace(/-[0-9a-f]{32}$/, '') || 'home'
    const img = new Image()
    img.src =
      'https://notion-tracker.peter-amdev.workers.dev/?page=' +
      encodeURIComponent(site) + '&card=' + encodeURIComponent(card)
  }, [pathname])

  return null
}
