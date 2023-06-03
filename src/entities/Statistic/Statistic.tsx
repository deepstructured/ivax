import { FC, useEffect, useRef, useState } from 'react'
import styles from './Statistic.module.scss'
import { gsap } from 'gsap'

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
    }
  }, [count, scrollY])

  useEffect(() => {
    document.addEventListener('scroll', () => setScrollY(window.pageYOffset))
  }, [])

  return (
    <div ref={ref} className={styles.statistic}>
      <big>
        {count !== 0 && count}{' '}
        <span style={{ opacity: count < num ? `0` : `1` }}>+</span>{' '}
      </big>
      <h3 data-delay={`${id * 0.15}`} className="reveal bottom">
        {value}
      </h3>
    </div>
  )
}
