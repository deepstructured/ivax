import { gsap } from 'gsap'
import MouseFollower from 'mouse-follower'
import { useRef, useEffect } from 'react'
import './CursorFollower.scss'

MouseFollower.registerGSAP(gsap)

export const CursorFollower = () => {
  const refCursor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.innerWidth > 565 && refCursor.current) {
      const cursor = new MouseFollower({
        container: document.body,
        el: refCursor.current,
        speed: 0.3,
        skewing: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        ease: 'SlowMo.ease.config(0.70.7,0.7 0.7, false)',
        textClassName: 'text',
      })

      const scaleCursorItems = document.querySelectorAll('.cursor-scale')
      const circleCursorItems = document.querySelectorAll('.cursor-circle')
      const commonCursorItems = document.querySelectorAll('.cursor-common')
      const radioCursorItems = document.querySelectorAll('.cursor-radio')

      Array.from(scaleCursorItems, (item) => {
        item.addEventListener('mousemove', () => {
          if (refCursor.current) {
            refCursor.current.className = `cursor cursor-scale`
          }
        })
        item.addEventListener(
          'mouseleave',
          () => refCursor.current && (refCursor.current.className = `cursor`)
        )
        item.addEventListener(
          'mouseleave',
          () => refCursor.current && (refCursor.current.className = `cursor`)
        )
      })

      Array.from(circleCursorItems, (item) => {
        item.addEventListener('mousemove', () => {
          if (refCursor.current) {
            refCursor.current.className = `cursor cursor-circle`
          }
        })
        item.addEventListener(
          'mouseleave',
          () => refCursor.current && (refCursor.current.className = `cursor`)
        )
      })

      Array.from(commonCursorItems, (item) => {
        item.addEventListener('mousemove', () => {
          if (refCursor.current) {
            refCursor.current.className = `cursor cursor-common`
          }
        })
        item.addEventListener(
          'mouseleave',
          () => refCursor.current && (refCursor.current.className = `cursor`)
        )
      })

      Array.from(radioCursorItems, (item) => {
        item.addEventListener('mousemove', () => {
          if (refCursor.current) {
            refCursor.current.className = `cursor cursor-radio`
          }
        })
        item.addEventListener(
          'mouseleave',
          () => refCursor.current && (refCursor.current.className = `cursor`)
        )
      })
    }
  }, [])

  return <div ref={refCursor} className="cursor"></div>
}
