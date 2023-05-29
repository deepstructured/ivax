import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface IProps {
  type: 'common' | 'circle'
  children: ReactNode
}

export const Button: FC<IProps> = ({ type, children }) => {
  return (
    <button className={clsx(styles.button, styles[type])}>{children}</button>
  )
}
