import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import styles from './Benefits.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { benefitsData } from './data'
import { Benefit } from '../../../../entities/Benefit/Benefit'
import { useAnchor } from '../../../../hooks/useAnchor'
import { gsap } from 'gsap'
import { useReveal } from '../../../../hooks/useReveal'

export const Benefits = () => {
  const refLine = useRef<HTMLDivElement>(null)
  const refSection = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (refLine.current && refSection.current) {
      if (window.innerWidth > 565) {
        gsap.set(refLine.current, { width: 0 })
      } else {
        gsap.set(refLine.current, { height: 0 })
      }

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

      useReveal(
        refLine.current,
        {
          width: `100%`,
          duration: 5,
        },
        {
          width: 0,
          duration: 1,
        },
        refSection.current
      )
    }
  }, [])

  return (
    <section
      ref={refSection}
      id="benefits"
      className={clsx(styles.benefits, 'gray')}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <h2>
            <span className="reveal left">We promise</span>{' '}
            <span className="yellow reveal right">six things</span>
          </h2>
          <div className={styles.benefitsRow}>
            <div className="flex items-end" id="row-1">
              {benefitsData.map(
                (benefit, idx) =>
                  (idx + 1) % 2 !== 0 && (
                    <Benefit
                      id={idx}
                      key={benefit}
                      position={'top'}
                      text={benefit}
                    />
                  )
              )}
            </div>
            <div ref={refLine} className={styles.line}></div>
            <div className="flex items-start" id="row-2">
              {benefitsData.map(
                (benefit, idx) =>
                  (idx + 1) % 2 === 0 && (
                    <Benefit
                      id={idx}
                      key={benefit}
                      position={'bottom'}
                      text={benefit}
                    />
                  )
              )}
            </div>
          </div>
          <div data-start="100%" className="reveal bottom">
            <Button onClick={() => useAnchor('#contact')} type="circle">
              Talk to us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
