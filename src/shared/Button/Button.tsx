import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface IProps {
  type: 'common' | 'circle'
  children: ReactNode
  htmlType?: 'button' | 'reset' | 'submit'
}

export const Button: FC<IProps> = ({ type, children, htmlType }) => {
  return (
    <button
      type={htmlType ?? 'button'}
      className={clsx(styles.button, styles[type])}
    >
      <div className={styles.text}>{children}</div>
    </button>
  )
}
