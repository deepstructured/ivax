import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface IProps {
  type: 'common' | 'circle' | 'radio'
  children: ReactNode
  htmlType?: 'button' | 'reset' | 'submit'
  onClick?: () => void
}

export const Button: FC<IProps> = ({ type, children, htmlType, onClick }) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      type={htmlType ?? 'button'}
      className={clsx(styles.button, styles[type])}
    >
      <div className={styles.text}>{children}</div>
    </button>
  )
}
