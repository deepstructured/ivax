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
  const [counterRunned, setCounterRunned] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      const numNode = ref.current.querySelector<HTMLElement>(`.${styles.num}`)
      const labelNode = ref.current.querySelector<HTMLElement>(`h3`)

      gsap.set(numNode, {
        opacity: 0,
        y: `-50%`,
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: `top 90%`,
        end: `bottom 0%`,
        onEnter: () => !counterRunned && runCounter(),
        once: true,
      })

      if (numNode && labelNode) {
        ScrollTrigger.create({
          trigger: ref.current,
          start: `top 90%`,
          end: `bottom 35%`,
          onLeave: () =>
            gsap.to(numNode, {
              opacity: 0,
              y: `-50%`,
              duration: 1.25,
            }),
          onEnter: () =>
            gsap.to(numNode, {
              opacity: 1,
              y: 0,
              duration: 1.25,
            }),
          onEnterBack: () =>
            gsap.to(numNode, {
              opacity: 1,
              y: 0,
              duration: 1.25,
            }),
          onLeaveBack: () =>
            gsap.to(numNode, {
              opacity: 0,
              y: `-50%`,
              duration: 1.25,
            }),
        })

        ScrollTrigger.create({
          trigger: ref.current,
          start: `top 90%`,
          end: `bottom 35%`,
          onLeave: () =>
            gsap.to(labelNode, {
              opacity: 0,
              y: `50%`,
              duration: 1.25,
            }),
          onEnter: () =>
            gsap.to(labelNode, {
              opacity: 1,
              y: 0,
              duration: 1.25,
            }),
          onEnterBack: () =>
            gsap.to(labelNode, {
              opacity: 1,
              y: 0,
              duration: 1.25,
            }),
          onLeaveBack: () =>
            gsap.to(labelNode, {
              opacity: 0,
              y: `50%`,
              duration: 1.25,
            }),
        })
      }
    }
  }, [])

  useEffect(() => {
    if (count < num && counterRunned) {
      setTimeout(() => runCounter(), num >= 50 ? 15 : 25)
    } else if (count === num) {
      setCounterRunned(false)
    }
  }, [count])

  function runCounter() {
    if (count < num) {
      setCount(count + 1)

      if (!counterRunned) {
        setCounterRunned(true)
      }
    }
  }

  return (
    <div ref={ref} className={styles.statistic}>
      <big className={styles.num}>
        {count !== 0 && count} <span>+</span>{' '}
      </big>
      <h3 className="reveal bottom">{value}</h3>
    </div>
  )
}
