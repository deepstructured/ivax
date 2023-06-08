import clsx from 'clsx'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { gsap } from 'gsap'
import { Button } from '../../../../shared/Button/Button'
import { Logo } from '../../../../shared/Logo/Logo'
import { Statistics } from '../../../../features/Statistics/Statistics'
import { statisticsData } from './data'
import { useAnchor } from '../../../../hooks/useAnchor'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.scss'

export const Hero = () => {
  const refSection = useRef<HTMLElement>(null)
  const refBulb = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (refSection.current && refBulb.current) {
      const logo = refSection.current.querySelector<HTMLElement>(
        `.${styles.logo}`
      ) as HTMLElement
      const button1 = refSection.current.querySelector<HTMLDivElement>(
        `.${styles.buttons} > button:first-child`
      ) as HTMLDivElement
      const button2 = refSection.current.querySelector<HTMLDivElement>(
        `.${styles.buttons} > button:last-child`
      ) as HTMLDivElement
      const bulbShadow = refSection.current.querySelector<HTMLDivElement>(
        `.shadow`
      ) as HTMLDivElement

      gsap.set(refBulb.current, {
        opacity: 0,
        y: `-75%`,
      })

      gsap.set(bulbShadow, {
        opacity: 0,
      })

      ScrollTrigger.create({
        trigger: refSection.current,
        start: `top 100%`,
        end: `bottom 80%`,
        onLeave: () =>
          gsap.to(bulbShadow, {
            opacity: 0,
            duration: 0.5,
          }),
        onEnter: () =>
          gsap.to(bulbShadow, {
            opacity: 1,
            duration: 1.5,
            delay: 0.5,
          }),
        onEnterBack: () =>
          gsap.to(bulbShadow, {
            opacity: 1,
            duration: 1.5,
            delay: 0.5,
          }),
        onLeaveBack: () =>
          gsap.to(bulbShadow, {
            opacity: 0,
            duration: 0.5,
          }),
      })

      ScrollTrigger.create({
        trigger: logo,
        start: `top 100%`,
        end: `bottom -50%`,
        onLeave: () =>
          gsap.to(logo, {
            ease: `cubic-bezier(0.83, 0, 0.17, 1)`,
            opacity: 0,
            x: `200%`,
            duration: 1.25,
          }),
        onEnter: () =>
          gsap.to(logo, {
            ease: `cubic-bezier(0.83, 0, 0.17, 1)`,
            opacity: 1,
            x: 0,
            duration: 1.25,
          }),
        onEnterBack: () =>
          gsap.to(logo, {
            ease: `cubic-bezier(0.83, 0, 0.17, 1)`,
            opacity: 1,
            x: 0,
            duration: 1.25,
          }),
        onLeaveBack: () =>
          gsap.to(logo, {
            ease: `cubic-bezier(0.83, 0, 0.17, 1)`,
            opacity: 0,
            x: `200%`,
            duration: 1.25,
          }),
      })

      ScrollTrigger.create({
        trigger: refSection.current,
        start: `top 100%`,
        end: `bottom 80%`,
        onLeave: () =>
          gsap.to(button1, {
            opacity: 0,
            x: `-25%`,
            duration: 1,
          }),
        onEnter: () =>
          gsap.to(button1, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
          }),
        onEnterBack: () =>
          gsap.to(button1, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
          }),
        onLeaveBack: () =>
          gsap.to(button1, {
            opacity: 0,
            x: `-25%`,
            duration: 1,
          }),
      })

      ScrollTrigger.create({
        trigger: refSection.current,
        start: `top 100%`,
        end: `bottom 80%`,
        onLeave: () =>
          gsap.to(button2, {
            opacity: 0,
            x: `25%`,
            duration: 1,
            delay: 0.5,
          }),
        onEnter: () =>
          gsap.to(button2, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            delay: 0.5,
          }),
        onEnterBack: () =>
          gsap.to(button2, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            delay: 0.5,
          }),
        onLeaveBack: () =>
          gsap.to(button2, {
            opacity: 0,
            x: `25%`,
            duration: 1,
            delay: 0.5,
          }),
      })

      ScrollTrigger.create({
        trigger: refSection.current,
        start: `top 100%`,
        end: `bottom 80%`,
        onLeave: () =>
          gsap.to(refBulb.current, {
            opacity: 0,
            y: `-75%`,
            duration: 1.25,
            ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
          }),
        onEnter: () =>
          gsap.to(refBulb.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
          }),
        onEnterBack: () =>
          gsap.to(refBulb.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
          }),
        onLeaveBack: () =>
          gsap.to(refBulb.current, {
            opacity: 0,
            y: `-75%`,
            duration: 1.25,
            ease: 'cubic-bezier(0.65, 0, 0.35, 1)',
          }),
      })
    }
  }, [])

  return (
    <section ref={refSection} className={styles.hero}>
      <div className="container">
        <div className={styles.logo}>
          <Logo type="primary" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>Paint</h1>
              <h1>your thoughts</h1>
              <h1>
                with <span className="yellow">IVAX</span>
              </h1>
            </div>
            <div
              className={clsx(
                'flex justify-end items-center gap-40',
                styles.buttons
              )}
            >
              <Button onClick={() => useAnchor('#portfolio')} type="common">
                Portfolio
              </Button>
              <Button onClick={() => useAnchor('#contact')} type="circle">
                Check with us
              </Button>
            </div>
          </div>
          <div className="bulbWrapper">
            <div className="shadow"></div>
            <div ref={refBulb} className="content">
              <Player
                className="wavingBubbles"
                autoplay
                loop
                src="/animations/waving-bubbles.json"
              ></Player>

              <Player
                className="innerBubbles"
                autoplay
                loop
                src="/animations/inner-bubbles.json"
              ></Player>
              <Player
                className="innerBubbles bubblesCopy"
                autoplay
                loop
                src="/animations/inner-bubbles.json"
              ></Player>
              <img className="bulb" src="/images/bulb-hero.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.statistics}>
          <Statistics data={statisticsData} />
        </div>
      </div>
    </section>
  )
}
