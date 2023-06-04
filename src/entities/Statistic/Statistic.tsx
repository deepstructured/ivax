import { FC, useEffect, useRef, useState } from 'react'
import styles from './Statistic.module.scss'
import { gsap } from 'gsap'
import { useReveal } from '../../hooks/useReveal'

interface IProps {
  num: number
  value: string
  id: number
}

export const Statistic: FC<IProps> = ({ num, value, id }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(0)
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    if (ref.current) {
      if (scrollY + window.outerHeight / 1.5 >= ref.current.offsetTop) {
        setTimeout(
          () => count < num && setCount(count + 1),
          num <= 50 ? 25 : 15
        )
      }

      const numNode = ref.current.querySelector<HTMLElement>(`.${styles.num}`)
      const labelNode = ref.current.querySelector<HTMLElement>(`h3`)

      if (numNode && labelNode) {
        useReveal(
          numNode,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          {
            y: `-25%`,
            opacity: 0,
            duration: 1,
          },
          ref.current
        )

        useReveal(
          labelNode,
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          {
            y: `25%`,
            opacity: 0,
            duration: 1,
          },
          ref.current
        )
      }
    }
  }, [count, scrollY])

  useEffect(() => {
    document.addEventListener('scroll', () => setScrollY(window.pageYOffset))
  }, [])

  return (
    <div ref={ref} className={styles.statistic}>
      <big className={styles.num}>
        {count !== 0 && count}{' '}
        <span style={{ opacity: count < num ? `0` : `1` }}>+</span>{' '}
      </big>
      <h3 className="reveal bottom">{value}</h3>
    </div>
  )
}
