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
      <h3>{author}</h3>
      <span className={clsx(styles.position, 'yellow')}>{position}</span>
      <p>{text}</p>
    </div>
  )
}
