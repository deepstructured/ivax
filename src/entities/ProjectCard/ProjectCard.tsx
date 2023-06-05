import { FC, useEffect, useRef } from 'react'
import styles from './ProjectCard.module.scss'
import { gsap } from 'gsap'
import { useReveal } from '../../hooks/useReveal'

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

      useReveal(
        ref.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          delay: (id + 1) * 0.1125,
        },
        {
          opacity: 0,
          y: `10%`,
          x: `-10%`,
          duration: 0.7,
          delay: (id + 1) * 0.1125,
        },
        ref.current,
        true,
        'bottom 50%'
      )
    }
  }, [])

  return (
    <div ref={ref} className={styles.projectCard}>
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
