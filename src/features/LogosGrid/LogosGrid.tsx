import { FC } from 'react'
import styles from './LogosGrid.module.scss'

interface IProps {
  data: any[]
}

export const LogosGrid: FC<IProps> = ({ data }) => {
  return (
    <div className={styles.logosGrid}>
      {data.map((logo) => (
        <img key={logo.id} src={logo.img} alt="" />
      ))}
    </div>
  )
}
