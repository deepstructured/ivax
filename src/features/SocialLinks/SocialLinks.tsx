import clsx from 'clsx'
import styles from './SocialLinks.module.scss'
import { FC } from 'react'
import { SocialLink } from '../../entities/SocialLink/SocialLink'

interface IProps {
  direction: 'row' | 'column'
  data: any[]
  type: 'primary' | 'secondary'
}

export const SocialLinks: FC<IProps> = ({ direction, data, type }) => {
  return (
    <ul className={clsx(styles.socialLinks, styles[direction])}>
      {data.map((social) => (
        <SocialLink
          key={social.href}
          href={social.href}
          type={type}
          icon={social.icon}
        />
      ))}
    </ul>
  )
}
