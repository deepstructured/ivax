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

      useReveal(
        text,
        {
          opacity: 1,
          duration: 1,
          delay: 0.4 * (id + 1),
        },
        {
          opacity: 0,
          duration: 1,
        },
        ref.current.closest('section'),
        true,
        'bottom 45%'
      )

      useReveal(
        ellipse,
        {
          opacity: 1,
          duration: 1,
          scale: 1,
          delay: 0.6 * (id + 1),
        },
        {
          opacity: 0,
          scale: 0,
          duration: 1,
        },
        ref.current.closest('section'),
        true,
        'bottom 45%'
      )

      useReveal(
        ref.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5 * (id + 1),
        },
        {
          opacity: 0,
          y: position === 'bottom' ? `100%` : '-100%',
          duration: 1,
        },
        ref.current.closest('section'),
        true,
        'bottom 45%'
      )
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
