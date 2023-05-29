import { FC } from 'react'
import { Statistic } from '../../entities/Statistic/Statistic'
import styles from './Statistics.module.scss'

interface IProps {
  data: any[]
}

export const Statistics: FC<IProps> = ({ data }) => {
  return (
    <div className={styles.statistics}>
      {data.map((item) => (
        <Statistic key={item.value} value={item.value} num={item.num} />
      ))}
    </div>
  )
}
