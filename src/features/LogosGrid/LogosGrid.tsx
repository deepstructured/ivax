import { FC, useEffect } from 'react'
import styles from './LogosGrid.module.scss'
import { animation } from './animation'

interface IProps {
  data: any[]
}

export const LogosGrid: FC<IProps> = ({ data }) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLImageElement>(
      `.${styles.logo}`
    )

    animation(elements)
  }, [])

  return (
    <div className={styles.logosGrid}>
      {data.map((logo) => (
        <img className={styles.logo} key={logo.id} src={logo.img} alt="" />
      ))}
    </div>
  )
}
