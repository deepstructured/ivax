import { FC, useRef, useEffect } from 'react'
import styles from './Testimonial.module.scss'
import clsx from 'clsx'
import { useReveal } from '../../hooks/useReveal'
import { gsap } from 'gsap'

interface IProps {
  author: string
  position: string
  text: string
}

export const Testimonial: FC<IProps> = ({ author, position, text }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const h3 = ref.current.querySelector<HTMLElement>('h3') as HTMLElement
      const span = ref.current.querySelector<HTMLElement>('span') as HTMLElement
      const text = ref.current.querySelector<HTMLElement>('p') as HTMLElement

      gsap.set(h3, {
        opacity: 0,
        x: `25%`,
      })

      gsap.set(span, {
        opacity: 0,
        x: `25%`,
      })

      gsap.set(text, {
        opacity: 0,
        y: `50%`,
      })

      useReveal(
        h3,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
        },
        false,
        ref.current.closest('section'),
        true,
        'bottom 80%',
        'top 80%'
      )

      useReveal(
        span,
        {
          opacity: 1,
          x: 0,
          delay: 0.25,
          duration: 0.5,
        },
        false,
        ref.current.closest('section'),
        true,
        'bottom 80%',
        'top 80%'
      )

      useReveal(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
        },
        false,
        ref.current.closest('section'),
        true,
        'bottom 80%',
        'top 80%'
      )
    }
  }, [author, text, position])

  return (
    <div ref={ref} className={styles.testimonial}>
      <h3>{author}</h3>
      <span className={clsx(styles.position, 'yellow')}>{position}</span>
      <p>{text}</p>
    </div>
  )
}
