import { FC, useEffect, useRef } from 'react'
import styles from './ProjectCard.module.scss'
import { gsap } from 'gsap'
import { useReveal } from '../../hooks/useReveal'
import clsx from 'clsx'

interface IProps {
  title: string
  category: string
  thumbnail: string
  id: number
}

export const ProjectCard: FC<IProps> = ({ title, category, thumbnail, id }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, {
        opacity: 0,
        y: `10%`,
        x: `-10%`,
      })

      ScrollTrigger.create({
        trigger: ref.current,
        start: `top 90%`,
        end: `bottom 35%`,
        onLeave: () =>
          gsap.to(ref.current, {
            opacity: 0,
            x: `-10%`,
            y: `10%`,
            duration: 1,
            delay: (id + 1) * 0.1125,
          }),
        onEnter: () =>
          gsap.to(ref.current, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            delay: (id + 1) * 0.1125,
          }),
        onEnterBack: () =>
          gsap.to(ref.current, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            delay: (id + 1) * 0.1125,
          }),
        onLeaveBack: () =>
          gsap.to(ref.current, {
            opacity: 0,
            x: `-10%`,
            y: `10%`,
            duration: 1,
            delay: (id + 1) * 0.1125,
          }),
      })
    }
  }, [])

  return (
    <div ref={ref} className={clsx(styles.projectCard, 'cursor-scale')}>
      <div className={styles.content}>
        <a href="" className={styles.thumbnail}>
          <img
            src="/images/icons/thumb-arrow.svg"
            alt=""
            className={styles.arrow}
          />
          <img src={thumbnail} className={styles.img} alt={title} />
        </a>
        <span className="yellow">{category}</span>
        <h4>{title}</h4>
      </div>
    </div>
  )
}
