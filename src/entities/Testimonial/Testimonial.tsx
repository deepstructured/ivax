import { FC } from 'react'
import styles from './Testimonial.module.scss'
import clsx from 'clsx'

interface IProps {
  author: string
  position: string
  text: string
}

export const Testimonial: FC<IProps> = ({ author, position, text }) => {
  return (
    <div className={styles.testimonial}>
      <h3 className="reveal right">{author}</h3>
      <span className={clsx(styles.position, 'yellow reveal right')}>
        {position}
      </span>
      <p className="reveal right">{text}</p>
    </div>
  )
}
