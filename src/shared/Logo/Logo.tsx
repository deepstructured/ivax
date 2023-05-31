import { FC } from 'react'
import styles from './Logo.module.scss'

interface IProps {
  type: 'primary' | 'secondary'
}

export const Logo: FC<IProps> = ({ type }) => {
  switch (type) {
    case 'primary':
      return (
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="" />
        </div>
      )
    case 'secondary':
      return (
        <div className={styles.logo}>
          <img src="/images/logo-secondary.svg" alt="" />
        </div>
      )
  }
}
