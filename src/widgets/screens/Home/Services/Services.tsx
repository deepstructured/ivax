import { useEffect, useRef } from 'react'
import { ServicesGroup } from '../../../../features/ServicesGroup/ServicesGroup'
import styles from './Services.module.scss'
import { servicesData } from './data'
import { gsap } from 'gsap'
import MouseFollower from 'mouse-follower'

gsap.registerPlugin(MouseFollower)

export const Services = () => {
  const refBulb = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (refBulb.current) {
      gsap.set(refBulb.current, { opacity: 0, y: `100%`, scale: 0.8 })

      ScrollTrigger.create({
        trigger: refBulb.current,
        start: 'top 150%',
        onEnter: () =>
          gsap.to(refBulb.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'cubic-bezier(0.85, 0, 0.15, 1)',
          }),
      })
    }
  }, [])

  return (
    <section id="services" className={styles.services}>
      <div className="container space-top space-bottom">
        <div className={styles.wrapper}>
          <h2 className="reveal left">
            We <span className="yellow">delivery</span>
          </h2>
          <div className={styles.bulb}>
            <img ref={refBulb} src="/images/bulb.png" alt="" />
          </div>
          <ServicesGroup data={servicesData} />
        </div>
      </div>
    </section>
  )
}
