import { FC } from 'react'
import { Service } from '../../entities/Service/Service'
import styles from './ServicesGroup.module.scss'

interface IProps {
  data: any[]
}

export const ServicesGroup: FC<IProps> = ({ data }) => {
  return (
    <div className={styles.servicesGroup}>
      {data.map((service) => (
        <Service
          key={service.id}
          id={service.id}
          title={service.title}
          icon={service.icon}
          categories={service.categories}
        />
      ))}
    </div>
  )
}
