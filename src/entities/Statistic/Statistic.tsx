import { FC } from 'react'
import styles from './Statistic.module.scss'

interface IProps {
  num: string
  value: string
}

export const Statistic: FC<IProps> = ({ num, value }) => {
  return (
    <div className={styles.statistic}>
      <big>{num}</big>
      <h3>{value}</h3>
    </div>
  )
}
