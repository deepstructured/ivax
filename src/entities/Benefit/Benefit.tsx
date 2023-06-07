import { FC, useRef, useEffect } from 'react'
import styles from './Benefit.module.scss'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { Ellipse } from '../../shared/Ellipse/Ellipse'
import { useReveal } from '../../hooks/useReveal'

interface IProps {
  position: 'top' | 'bottom'
  text: string
  id: number
}

export const Benefit: FC<IProps> = ({ position, text, id }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const text = ref.current.querySelector<HTMLElement>('p') as HTMLElement
      const ellipse = ref.current.querySelector<HTMLElement>(
        `.${styles.ellipse}`
      ) as HTMLElement

      gsap.set(text, { opacity: 0 })
      gsap.set(ref.current, {
        opacity: 0,
        y: position === 'bottom' ? `100%` : '-100%',
      })
      gsap.set(ellipse, { opacity: 0, scale: 0 })

      ScrollTrigger.create({
        trigger: ref.current.closest('section'),
        start: `top 80%`,
        end: `bottom 50%`,
        onLeave: () =>
          gsap.to(text, {
            opacity: 0,
          }),
        onEnter: () =>
          gsap.to(text, {
            opacity: 1,
            duration: 1,
            delay: 0.65 * (id + 1),
          }),
        onEnterBack: () =>
          gsap.to(text, {
            opacity: 1,
            duration: 1,
            delay: 0.65 * (id + 1),
          }),
        onLeaveBack: () =>
          gsap.to(text, {
            duration: 1,
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.closest('section'),
        start: `top 80%`,
        end: `bottom 50%`,
        onLeave: () =>
          gsap.to(ellipse, {
            opacity: 0,
            scale: 0,
            duration: 1,
          }),
        onEnter: () =>
          gsap.to(ellipse, {
            opacity: 1,
            duration: 1,
            scale: 1,
            delay: 0.6 * (id + 1),
          }),
        onEnterBack: () =>
          gsap.to(ellipse, {
            opacity: 1,
            duration: 1,
            scale: 1,
            delay: 0.6 * (id + 1),
          }),
        onLeaveBack: () =>
          gsap.to(ellipse, {
            opacity: 0,
            scale: 0,
            duration: 1,
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.closest('section'),
        start: `top 80%`,
        end: `bottom 50%`,
        onLeave: () =>
          gsap.to(ref.current, {
            opacity: 0,
            y: position === 'bottom' ? `100%` : '-100%',
            duration: 1,
          }),
        onEnter: () =>
          gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5 * (id + 1),
          }),
        onEnterBack: () =>
          gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5 * (id + 1),
          }),
        onLeaveBack: () =>
          gsap.to(ref.current, {
            opacity: 0,
            y: position === 'bottom' ? `100%` : '-100%',
            duration: 1,
          }),
      })
    }
  }, [])

  return (
    <div ref={ref} className={clsx(styles.benefit, styles[position])}>
      <div className={clsx(styles.content, 'cursor-scale')}>
        <p>{text}</p>
      </div>
      <div className={styles.ellipse}>
        <Ellipse />
      </div>
    </div>
  )
}
