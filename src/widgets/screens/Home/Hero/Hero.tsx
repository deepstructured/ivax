import clsx from 'clsx'
import { Button } from '../../../../shared/Button/Button'
import { Logo } from '../../../../shared/Logo/Logo'
import styles from './Hero.module.scss'
import { Statistics } from '../../../../features/Statistics/Statistics'
import { statisticsData } from './data'
import { useAnchor } from '../../../../hooks/useAnchor'
import { useEffect, useRef } from 'react'
import { useReveal } from '../../../../hooks/useReveal'

export const Hero = () => {
  const refSection = useRef<HTMLElement>(null)

  useEffect(() => {
    if (refSection.current) {
      const logo = refSection.current.querySelector<HTMLElement>(
        `.${styles.logo}`
      ) as HTMLElement

      useReveal(
        logo,
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
        },
        {
          opacity: 0,
          x: `25%`,
          duration: 1.25,
        },
        refSection.current,
        true,
        'bottom 50%',
        'top 100%'
      )

      useReveal(
        refSection.current.querySelector<HTMLDivElement>(
          `.${styles.buttons} > div:first-child`
        ) as HTMLDivElement,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
        },
        {
          opacity: 0,
          x: `-25%`,
          duration: 1,
        },
        refSection.current,
        true,
        'bottom 50%',
        'top 100%'
      )

      useReveal(
        refSection.current.querySelector<HTMLDivElement>(
          `.${styles.buttons} > div:last-child`
        ) as HTMLDivElement,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
        },
        {
          opacity: 0,
          x: `25%`,
          duration: 1,
        },
        refSection.current,
        true,
        'bottom 50%',
        'top 100%'
      )
    }
  }, [])

  return (
    <section ref={refSection} className={styles.hero}>
      <div className="container">
        <div className={clsx(styles.logo, 'reveal right')}>
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
              <div className="reveal left">
                <Button onClick={() => useAnchor('#portfolio')} type="common">
                  Portfolio
                </Button>
              </div>
              <div className="reveal right">
                <Button onClick={() => useAnchor('#contact')} type="circle">
                  Check with us
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.picture}></div>
        </div>
        <div className={styles.statistics}>
          <Statistics data={statisticsData} />
        </div>
      </div>
    </section>
  )
}
