import { FC, useEffect, useRef } from 'react'
import styles from './LogosGrid.module.scss'
import { gsap } from 'gsap'
import { useReveal } from '../../hooks/useReveal'

interface IProps {
  data: any[]
}

export const LogosGrid: FC<IProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const elements = Array.from(
        ref.current.querySelectorAll<HTMLImageElement>(`.${styles.logo}`)
      )

      elements.map((el, idx) => {
        gsap.set(el, {
          opacity: 0,
          x: `-25%`,
          y: `25%`,
        })

        useReveal(
          el,
          {
            opacity: 1,
            x: 0,
            y: 0,
            delay: idx && 0.125 * idx,
          },
          {
            opacity: 0,
            x: `-25%`,
            y: `25%`,
            delay: idx && 0.075 * idx,
          },
          el.parentElement,
          true,
          'bottom 50%'
        )
      })
    }
  }, [])

  return (
    <div ref={ref} className={styles.logosGrid}>
      {data.map((logo) => (
        <img className={styles.logo} key={logo.id} src={logo.img} alt="" />
      ))}
    </div>
  )
}
