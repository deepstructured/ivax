import { gsap } from 'gsap'
import { FC, useEffect, useRef } from 'react'
import styles from './Service.module.scss'
import { Ellipse } from '../../shared/Ellipse/Ellipse'
import { useReveal } from '../../hooks/useReveal'

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
      const content = ref.current.querySelector(
        `.${styles.content}`
      ) as HTMLElement
      const icon = ref.current.querySelector<HTMLElement>(
        `.${styles.icon}`
      ) as HTMLElement
      const number = ref.current.querySelector<HTMLElement>('p') as HTMLElement
      const title = ref.current.querySelector<HTMLElement>('h3') as HTMLElement
      const listItems = ref.current.querySelectorAll<HTMLElement>(
        `.${styles.list} > li`
      )
      const ellipse = ref.current.querySelector<HTMLElement>(
        `.${styles.ellipse}`
      ) as HTMLElement
      const svgLine = ref.current.querySelector<HTMLElement>(
        'svg'
      ) as HTMLElement

      gsap.set(icon, { opacity: 0, x: `50%` })
      gsap.set(number, { opacity: 0, x: `-25%` })
      gsap.set(title, { opacity: 0, x: `10%` })
      gsap.set(ellipse, { opacity: 0, scale: 0 })
      gsap.set(svgLine, { opacity: 0, width: 0 })

      switch (id) {
        case 1:
          gsap.set(content, {
            opacity: 0,
            rotate: 45,
            scale: 0.5,
            x: `125%`,
            y: `75%`,
          })
          break
        case 2:
          gsap.set(content, {
            opacity: 0,
            rotate: `-45`,
            x: `-125%`,
            y: `75%`,
            scale: 0.5,
          })
          break
        case 3:
          gsap.set(content, {
            opacity: 0,
            rotate: 45,
            scale: 0.5,
            x: `125%`,
            y: `-150%`,
          })
          break
        case 4:
          gsap.set(content, {
            opacity: 0,
            rotate: `-45`,
            scale: 0.5,
            x: `-125%`,
            y: `-150%`,
          })
          break
      }

      let leaveAnim: {
        [key: string]: any
      }

      switch (id) {
        case 1:
          leaveAnim = {
            opacity: 0,
            rotate: 45,
            scale: 0.5,
            x: `125%`,
            y: `75%`,
            duration: 1.5,
          }
          break
        case 2:
          leaveAnim = {
            opacity: 0,
            rotate: `-45`,
            x: `-125%`,
            y: `75%`,
            duration: 1.5,
            scale: 0.5,
          }
          break
        case 3:
          leaveAnim = {
            opacity: 0,
            rotate: 45,
            scale: 0.5,
            x: `125%`,
            y: `-150%`,
            duration: 1.5,
          }
          break
        case 4:
          leaveAnim = {
            opacity: 0,
            rotate: `-45`,
            scale: 0.5,
            x: `-125%`,
            y: `-150%`,
            duration: 1.5,
          }
          break
      }

      ScrollTrigger.create({
        trigger: ref.current.closest('#services-wrapper'),
        start: `top 60%`,
        end: `bottom 50%`,
        onLeave: () =>
          gsap.to(content, {
            ...leaveAnim,
          }),
        onEnter: () =>
          gsap.to(content, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1,
            delay: 0.6 * id,
          }),
        onEnterBack: () =>
          gsap.to(content, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1,
            delay: 0.6 * id,
          }),
        onLeaveBack: () =>
          gsap.to(content, {
            ...leaveAnim,
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.closest('#services-wrapper'),
        start: `top 60%`,
        end: `bottom 50%`,
        onLeave: () =>
          gsap.to(svgLine, {
            opacity: 0,
            width: 0,
            duration: 1,
          }),
        onEnter: () =>
          gsap.to(svgLine, {
            opacity: 1,
            width: `100%`,
            duration: 1.5,
            delay: 0.9 * id,
          }),
        onEnterBack: () =>
          gsap.to(svgLine, {
            opacity: 1,
            width: `100%`,
            duration: 1.5,
            delay: 0.9 * id,
          }),
        onLeaveBack: () =>
          gsap.to(svgLine, {
            opacity: 0,
            width: 0,
            duration: 1,
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.closest('#services-wrapper'),
        start: `top 60%`,
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
            scale: 1,
            duration: 1.5,
            delay: 0.9 * id,
          }),
        onEnterBack: () =>
          gsap.to(ellipse, {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: 0.9 * id,
          }),
        onLeaveBack: () =>
          gsap.to(ellipse, {
            opacity: 0,
            scale: 0,
            duration: 1,
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.closest('#services-wrapper'),
        start: `top 60%`,
        end: `bottom 50%`,
        onLeave: () =>
          gsap.to(icon, {
            opacity: 0,
            x: `25%`,
            duration: 1,
          }),
        onEnter: () =>
          gsap.to(icon, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: id === 1 ? 0.8 * id + 0.45 : 0.8 * id,
          }),
        onEnterBack: () =>
          gsap.to(icon, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: id === 1 ? 0.8 * id + 0.45 : 0.8 * id,
          }),
        onLeaveBack: () =>
          gsap.to(icon, {
            opacity: 0,
            x: `25%`,
            duration: 1,
          }),
      })

      ScrollTrigger.create({
        trigger: ref.current.closest('#services-wrapper'),
        start: `top 60%`,
        end: `bottom 50%`,
        onLeave: () =>
          gsap.to(number, {
            opacity: 0,
            x: `-25%`,
            duration: 1,
          }),
        onEnter: () =>
          gsap.to(number, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: id === 1 ? 0.9 * id + 0.45 : 0.9 * id,
          }),
        onEnterBack: () =>
          gsap.to(number, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: id === 1 ? 0.9 * id + 0.45 : 0.9 * id,
          }),
        onLeaveBack: () =>
          gsap.to(number, {
            opacity: 0,
            x: `-25%`,
            duration: 1,
          }),
      })

      Array.from(listItems).map((item, idx) => {
        gsap.set(item, { opacity: 0, y: `100%` })

        ScrollTrigger.create({
          trigger: ref.current?.closest('#services-wrapper'),
          start: `top 60%`,
          end: `bottom 50%`,
          onLeave: () =>
            gsap.to(item, {
              opacity: 0,
              y: `50%`,
              duration: 1,
            }),
          onEnter: () =>
            gsap.to(item, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: id === 1 ? 0.9 * id + 0.45 : 0.9 * id,
            }),
          onEnterBack: () =>
            gsap.to(item, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: id === 1 ? 0.9 * id + 0.45 : 0.9 * id,
            }),
          onLeaveBack: () =>
            gsap.to(item, {
              opacity: 0,
              y: `50%`,
              duration: 1,
            }),
        })
      })

      ScrollTrigger.create({
        trigger: ref.current.closest('#services-wrapper'),
        start: `top 60%`,
        end: `bottom 50%`,
        onLeave: () =>
          gsap.to(title, {
            opacity: 0,
            x: `25%`,
            duration: 1,
          }),
        onEnter: () =>
          gsap.to(title, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: id === 1 ? 0.85 * id + 0.45 : 0.85 * id,
          }),
        onEnterBack: () =>
          gsap.to(title, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: id === 1 ? 0.85 * id + 0.45 : 0.85 * id,
          }),
        onLeaveBack: () =>
          gsap.to(title, {
            opacity: 0,
            x: `25%`,
            duration: 1,
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
            strokeDasharray="4 4"
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
              <stop stopColor="#FED761" stopOpacity="0" />
              <stop offset="0.484375" stopColor="#FED55B" />
              <stop offset="1" stopColor="#FED659" stopOpacity="0" />
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
