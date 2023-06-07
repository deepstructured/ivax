import { FC, useEffect, useRef } from 'react'
import styles from './LogosGrid.module.scss'
import { gsap } from 'gsap'
import clsx from 'clsx'

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

        ScrollTrigger.create({
          trigger: el.parentElement,
          start: `top 90%`,
          end: `bottom 35%`,
          // markers: true,
          onLeave: () =>
            gsap.to(el, {
              opacity: 0,
              x: `-25%`,
              y: `25`,
              duration: 1,
              delay: idx && 0.075 * idx,
            }),
          onEnter: () =>
            gsap.to(el, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              delay: idx && 0.125 * idx,
            }),
          onEnterBack: () =>
            gsap.to(el, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1,
              delay: idx && 0.125 * idx,
            }),
          onLeaveBack: () =>
            gsap.to(el, {
              opacity: 0,
              x: `-25%`,
              y: `25`,
              duration: 1,
              delay: idx && 0.075 * idx,
            }),
        })
      })
    }
  }, [])

  return (
    <div ref={ref} className={clsx(styles.logosGrid, 'cursor-scale')}>
      {data.map((logo) => (
        <img className={styles.logo} key={logo.id} src={logo.img} alt="" />
      ))}
    </div>
  )
}
