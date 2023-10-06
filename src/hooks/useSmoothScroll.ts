'use client'

import { RefObject } from 'react'

type ScrollToFunction = (ref: RefObject<HTMLDivElement>) => void

export const useSmoothScroll = (): ScrollToFunction => {
  const scrollToRef: ScrollToFunction = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return scrollToRef
}
