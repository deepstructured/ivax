import { useEffect, useRef } from 'react'
import { ServicesGroup } from '../../../../features/ServicesGroup/ServicesGroup'
import styles from './Services.module.scss'
import { servicesData } from './data'
import { gsap } from 'gsap'
import MouseFollower from 'mouse-follower'
import { useReveal } from '../../../../hooks/useReveal'

const MAX_DEGREE = 0
const MAX_OFFSET_X = 50
const MAX_OFFSET_Y = 50

gsap.registerPlugin(MouseFollower)

export const Services = () => {
  const refBulb = useRef<HTMLDivElement>(null)
  const refSection = useRef<HTMLDivElement>(null)
  const refWrapper = useRef<HTMLDivElement>(null)
  const transformed = useRef(false)

  useEffect(() => {
    if (refBulb.current && refSection.current) {
      useReveal(
        refBulb.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
        },
        {
          opacity: 0,
          scale: 0.5,
          duration: 1,
        },
        refBulb.current
      )

      useReveal(
        Array.from(
          refSection.current.querySelectorAll<HTMLElement>('h2 > span')
        ),
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
    }
  }, [])

  const mouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    const transform = (x: number, y: number, degrees: number) => {
      const bulb = refBulb.current?.querySelector('img')
      if (!bulb) return

      bulb.style.transform = `translate(${x}px, ${y}px) rotate(${degrees}deg)`
    }

    const backTransform = () => {
      const bulb = refBulb.current?.querySelector('img')
      if (!bulb) return

      bulb.style.transition = `transform .5s ease-in-out`
      bulb.style.transform = `translate(0) rotate(0}deg)`
    }

    const target = ev.currentTarget as HTMLDivElement

    const center = { x: target.offsetWidth / 2, y: target.offsetHeight / 2 }
    const point = { x: ev.clientX, y: ev.clientY }
    // Point
    const xPoint = point.x - center.x
    const yPoint = point.y - center.y
    // X & Y
    const x = (xPoint / center.x) * MAX_OFFSET_X
    const y = (yPoint / center.y) * MAX_OFFSET_Y
    // Angle
    const angle = ((-xPoint + yPoint * 2) / (center.x + center.y)) * MAX_DEGREE

    transform(x, y, angle)
    transformed.current = true
  }

  return (
    <section ref={refSection} id="services" className={styles.services}>
      <div className="container space-top space-bottom">
        <div
          onMouseMove={(ev) => mouseMove(ev)}
          ref={refWrapper}
          className={styles.wrapper}
        >
          <h2>
            <span className="reveal left">We</span>{' '}
            <span className="yellow reveal right">delivery</span>
          </h2>
          <div ref={refBulb} className={styles.bulb}>
            <img src="/images/bulb.png" alt="" />
          </div>
          <ServicesGroup data={servicesData} />
        </div>
      </div>
    </section>
  )
}
