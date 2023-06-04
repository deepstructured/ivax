import { useEffect, useRef } from 'react'
import { ServicesGroup } from '../../../../features/ServicesGroup/ServicesGroup'
import styles from './Services.module.scss'
import { servicesData } from './data'
import { gsap } from 'gsap'
import MouseFollower from 'mouse-follower'
import { useReveal } from '../../../../hooks/useReveal'

gsap.registerPlugin(MouseFollower)

export const Services = () => {
  const refBulb = useRef<HTMLDivElement>(null)
  const refSection = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={refSection} id="services" className={styles.services}>
      <div className="container space-top space-bottom">
        <div className={styles.wrapper}>
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
