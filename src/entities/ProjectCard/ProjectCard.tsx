import { FC } from 'react'
import styles from './ProjectCard.module.scss'

interface IProps {
  title: string
  category: string
  thumbnail: string
}

export const ProjectCard: FC<IProps> = ({ title, category, thumbnail }) => {
  return (
    <div className={styles.projectCard}>
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
  )
}
