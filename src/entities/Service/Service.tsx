import { gsap } from 'gsap'
import { FC, useEffect, useRef } from 'react'
import styles from './Service.module.scss'
import { Ellipse } from '../../shared/Ellipse/Ellipse'

interface IProps {
  title: string
  categories: string[]
  icon: string
  id: number
}

export const Service: FC<IProps> = ({ title, categories, icon, id }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const content = ref.current.querySelector(`.${styles.content}`)
      const icon = ref.current.querySelector(`.${styles.icon}`)
      const number = ref.current.querySelector('p')
      const title = ref.current.querySelector('h3')
      const listItems = ref.current.querySelectorAll(`.${styles.list} > li`)
      const ellipse = ref.current.querySelector(`.${styles.ellipse}`)
      const svgLine = ref.current.querySelector('svg')

      gsap.set(content, { opacity: 0, scale: 0.5 })
      gsap.set(icon, { opacity: 0, x: `100%` })
      gsap.set(number, { opacity: 0, x: `-25%` })
      gsap.set(title, { opacity: 0, x: `25%` })
      gsap.set(ellipse, { opacity: 0, scale: 0 })
      gsap.set(svgLine, { opacity: 0, width: 0 })

      Array.from(listItems).map((item, idx) => {
        gsap.set(item, { opacity: 0, y: `100%` })

        ScrollTrigger.create({
          trigger: ref.current?.parentElement,
          start: 'top 80%',
          onEnter: () =>
            gsap.to(item, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.65 * (id + 1),
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }),
        })
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 80%',
        onEnter: () =>
          gsap.to(content, {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1,
            delay: 0.5 * (id + 1),
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 80%',
        onEnter: () =>
          gsap.to(svgLine, {
            opacity: 1,
            width: `100%`,
            duration: 0.7,
            delay: 0.5 * (id + 1),
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 80%',
        onEnter: () =>
          gsap.to(ellipse, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: 0.6 * (id + 1),
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 80%',
        onEnter: () =>
          gsap.to(icon, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.6 * (id + 1),
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 80%',
        onEnter: () =>
          gsap.to(number, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.75 * (id + 1),
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.parentElement,
        start: 'top 80%',
        onEnter: () =>
          gsap.to(title, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.5 * (id + 1),
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }),
      })
    }
  }, [])

  return (
    <div ref={ref} className={styles.service}>
      <div className={styles.line}>
        <div className={styles.ellipse}>
          <Ellipse />
        </div>
        <svg
          width="2"
          height="312"
          viewBox="0 0 2 312"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.17383 311.521L1.33807 -1.43051e-05"
            stroke="url(#paint0_linear_60_1504)"
            stroke-dasharray="4 4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_60_1504"
              x1="1.1285"
              y1="311.469"
              x2="-153"
              y2="134.164"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FED761" stop-opacity="0" />
              <stop offset="0.484375" stop-color="#FED55B" />
              <stop offset="1" stop-color="#FED659" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.content}>
        <div className="flex items-center justify-between">
          <div className={styles.icon}>
            <img src={icon} alt="" />
          </div>
          <p>0{id}</p>
        </div>
        <h3>{title}</h3>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category}>
              <img src="/images/icons/check.svg" alt="" />
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
