import { FC, useRef, useEffect } from 'react'
import styles from './Benefit.module.scss'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { Ellipse } from '../../shared/Ellipse/Ellipse'

interface IProps {
  position: 'top' | 'bottom'
  text: string
  id: number
}

export const Benefit: FC<IProps> = ({ position, text, id }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const text = ref.current.querySelector('p')
      const ellipse = ref.current.querySelector(`.${styles.ellipse}`)

      gsap.set(text, { opacity: 0 })
      gsap.set(ref.current, {
        opacity: 0,
        y: position === 'bottom' ? `25%` : '-25%',
      })
      gsap.set(ellipse, { opacity: 0, scale: 0 })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 100%',
        onEnter: () =>
          gsap.to(text, {
            opacity: 1,
            duration: 1,
            delay: 0.4 * (id + 1),
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 100%',
        onEnter: () =>
          gsap.to(ellipse, {
            opacity: 1,
            duration: 1,
            scale: 1,
            delay: 0.5 * id,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 100%',
        onEnter: () =>
          gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3 * (id + 1),
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })
    }
  }, [])

  return (
    <div ref={ref} className={clsx(styles.benefit, styles[position])}>
      <div className={styles.content}>
        <p>{text}</p>
      </div>
      <div className={styles.ellipse}>
        <Ellipse />
      </div>
    </div>
  )
}
