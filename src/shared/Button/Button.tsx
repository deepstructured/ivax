import { FC, ReactNode, useEffect, useState } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface IProps {
  type: 'common' | 'circle' | 'radio'
  children: ReactNode
  htmlType?: 'button' | 'reset' | 'submit'
  onClick?: () => void
  className?: string
}

export const Button: FC<IProps> = ({
  type,
  children,
  htmlType,
  onClick,
  className,
}) => {
  const [cursor, setCursor] = useState<HTMLDivElement | null>(null)

  useEffect(
    () =>
      setCursor(
        document.querySelector<HTMLDivElement>('.cursor') as HTMLDivElement
      ),
    []
  )

  return (
    <button
      onMouseMove={() => {
        switch (type) {
          case 'circle':
            cursor?.classList.add('circle-btn-cursor')
            break
          case 'common':
            cursor?.classList.add('common-btn-cursor')
            break
          case 'radio':
            cursor?.classList.add('scale')
            break
        }
      }}
      onMouseLeave={() => {
        if (cursor) {
          cursor.className = `cursor`
        }
      }}
      onClick={() => onClick && onClick()}
      type={htmlType ?? 'button'}
      className={clsx(styles.button, styles[type], className && className)}
    >
      {type === 'circle' && <div className={styles.circleItem}></div>}
      <div className={styles.text}>{children}</div>
    </button>
  )
}
