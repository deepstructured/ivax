import { useContext } from 'react'
import { LangSelect } from '../../features/LangSelect/LangSelect'
import { Button } from '../../shared/Button/Button'
import styles from './Sidebar.module.scss'
import { langData } from './data'
import { SocialLinks } from '../../features/SocialLinks/SocialLinks'
import { socialLinks } from '../../data'
import { useAnchor } from '../../hooks/useAnchor'
import { Store } from '../../app/providers/store'

const Sidebar = () => {
  const { setActiveMenu } = useContext(Store)

  return (
    <aside className={styles.sidebar}>
      <nav>
        <div className={styles.col}>
          <Button onClick={() => setActiveMenu(true)} type="circle">
            Menu
          </Button>
          <div className={styles.lang}>
            <LangSelect langData={langData} />
          </div>
        </div>
        <div onClick={() => useAnchor('#contact')} className={styles.vertical}>
          <Button type="circle">Get in touch</Button>
        </div>
        <div className={styles.socials}>
          <SocialLinks direction="column" type="primary" data={socialLinks} />
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
