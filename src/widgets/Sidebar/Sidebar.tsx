import React from 'react'
import { Dispatch, SetStateAction, FC } from 'react'
import { LangSelect } from '../../features/LangSelect/LangSelect'
import { Button } from '../../shared/Button/Button'
import styles from './Sidebar.module.scss'
import { langData, socialsData } from './data'
import { SocialLinks } from '../../features/SocialLinks/SocialLinks'
import { socialLinks } from '../../data'
import { useAnchor } from '../../hooks/useAnchor'

interface IProps {
  setMenu?: Dispatch<SetStateAction<boolean>>
}

const Sidebar: FC<IProps> = ({ setMenu }) => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <div className={styles.col}>
          <div onClick={() => setMenu && setMenu(true)}>
            <Button type="circle">Menu</Button>
          </div>
          <LangSelect langData={langData} />
        </div>
        <div onClick={() => useAnchor('#contact')} className={styles.vertical}>
          <Button type="circle">Get in touch</Button>
        </div>
        <SocialLinks direction="column" type="primary" data={socialLinks} />
      </nav>
    </aside>
  )
}

export default Sidebar
