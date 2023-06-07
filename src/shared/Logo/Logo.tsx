import { FC } from 'react'
import styles from './Logo.module.scss'
import clsx from 'clsx'
import { useAnchor } from '../../hooks/useAnchor'

interface IProps {
  type: 'primary' | 'secondary'
}

export const Logo: FC<IProps> = ({ type }) => {
  switch (type) {
    case 'primary':
      return (
        <div
          onClick={() => useAnchor('0')}
          className={clsx(styles.logo, 'cursor-scale')}
        >
          <img src="/images/logo.svg" alt="" />
        </div>
      )
    case 'secondary':
      return (
        <div
          onClick={() => useAnchor('0')}
          className={clsx(styles.logo, 'cursor-scale')}
        >
          <img src="/images/logo-secondary.svg" alt="" />
        </div>
      )
  }
}
