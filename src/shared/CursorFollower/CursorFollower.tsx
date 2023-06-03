import { gsap } from 'gsap'
import MouseFollower from 'mouse-follower'
import { useRef, useEffect } from 'react'
import styles from './CursorFollower.module.scss'

MouseFollower.registerGSAP(gsap)

export const CursorFollower = () => {
  const refCursor = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 565) {
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
    }
  }, [])

  return <div ref={refCursor} className={styles.cursor}></div>
}
