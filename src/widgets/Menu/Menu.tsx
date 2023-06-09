import { useEffect, useRef, useState, useContext } from 'react'
import styles from './Menu.module.scss'
import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import { Button } from '../../shared/Button/Button'
import { SocialLinks } from '../../features/SocialLinks/SocialLinks'
import { socialLinks } from '../../data'
import { menuLinks } from './data'
import { useAnchor } from '../../hooks/useAnchor'
import { LangSelect } from '../../features/LangSelect/LangSelect'
import { langData } from '../Sidebar/data'
import { Store } from '../../app/providers/store'

export const Menu = () => {
  const refMenu = useRef<HTMLMenuElement>(null)
  const [closing, setClosing] = useState<boolean>(false)

  const { activeMenu, setActiveMenu } = useContext(Store)

  useEffect(() => {
    if (activeMenu === true) {
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.overflow = `auto`
    }
  }, [activeMenu, refMenu])

  useEffect(() => {
    closing && setTimeout(() => setClosing(false), 1500)
  }, [closing])

  return (
    <menu
      ref={refMenu}
      className={clsx(
        styles.menu,
        activeMenu === true && styles.active,
        closing && styles.hidden
      )}
    >
      <div className={styles.content}>
        <div className="flex items-center justify-between">
          <div
            onClick={() => {
              useAnchor('0')
              setActiveMenu(false)
              setClosing(true)
            }}
            className={styles.logo}
          >
            <Logo type="secondary" />
          </div>
          <div className={clsx('flex items-center', styles.group)}>
            <div className={styles.mobileLangSelect}>
              <LangSelect langData={langData} />
            </div>
            <Button
              onClick={() => {
                setActiveMenu(false)
                setClosing(true)
              }}
              type="common"
            >
              Close
            </Button>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.list}>
            <ul>
              {menuLinks.map((link, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    useAnchor(link.href)
                    setActiveMenu(false)
                    setClosing(true)
                  }}
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  <a href={link.href}>{link.title}</a>
                  <a className={styles.stroked} href={link.href}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <SocialLinks direction="row" type="secondary" data={socialLinks} />
          <div className={styles.button}>
            <Button
              onClick={() => {
                useAnchor('#contact')
                setActiveMenu(false)
                setClosing(true)
              }}
              type="radio"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.curtains}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </menu>
  )
}
