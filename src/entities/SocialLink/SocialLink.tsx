import clsx from 'clsx'
import styles from './SocialLink.module.scss'
import { FC, ReactNode } from 'react'

interface IProps {
  type: 'primary' | 'secondary'
  href: string
  icon: ReactNode
}

export const SocialLink: FC<IProps> = ({ href, type, icon }) => {
  return (
    <a
      href={href}
      className={clsx(styles.socialLink, styles[type], 'cursor-scale')}
    >
      {icon}
    </a>
  )
}
