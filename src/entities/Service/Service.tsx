import { FC } from 'react'
import styles from './Service.module.scss'

interface IProps {
  title: string
  categories: string[]
  icon: string
  id: string
}

export const Service: FC<IProps> = ({ title, categories, icon, id }) => {
  return (
    <div className={styles.service}>
      <div className={styles.content}>
        <div className="flex items-center justify-between">
          <div className={styles.icon}>
            <img src={icon} alt="" />
          </div>
          <p>0{id}</p>
        </div>
        <h3>{title}</h3>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li key={category}>
              <img src="/images/icons/check.svg" alt="" />
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
