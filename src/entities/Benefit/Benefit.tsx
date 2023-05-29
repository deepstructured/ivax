import { FC } from 'react'
import styles from './Benefit.module.scss'
import clsx from 'clsx'
import { Ellipse } from '../../shared/Ellipse/Ellipse'

interface IProps {
  position: 'top' | 'bottom'
  text: string
}

export const Benefit: FC<IProps> = ({ position, text }) => {
  return (
    <div className={clsx(styles.benefit, styles[position])}>
      <div className={styles.content}>{text}</div>
      <div className={styles.ellipse}>
        <Ellipse />
      </div>
    </div>
  )
}
