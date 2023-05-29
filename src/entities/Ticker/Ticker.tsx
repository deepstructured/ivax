import { FC, ReactNode } from 'react'
import styles from './Ticker.module.scss'
import clsx from 'clsx'

interface IProps {
  colorType: 'colored' | 'transparent'
  children: ReactNode
  direction: 'left' | 'right'
}

export const Ticker: FC<IProps> = ({ colorType, children, direction }) => {
  return (
    <div className={clsx(styles.ticker, styles[colorType], styles[direction])}>
      <div className="flex items-center">
        <span className={styles.main}>{children}</span>
        <span className={styles.copied}>{children}</span>
      </div>
    </div>
  )
}
