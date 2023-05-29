import React, { useEffect } from 'react'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

interface IProps {
  children: React.ReactNode
}

export const WithSmoothScroll: React.FC<IProps> = ({ children }) => {
  useEffect(() => {
    if (ScrollSmoother) {
      ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
      })
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
