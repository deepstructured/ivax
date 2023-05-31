import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './Menu.module.scss'
import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import { Button } from '../../shared/Button/Button'
import { SocialLinks } from '../../features/SocialLinks/SocialLinks'
import { socialLinks } from '../../data'
import { menuLinks } from './data'
import { useAnchor } from '../../hooks/useAnchor'

interface IProps {
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

export const Menu: FC<IProps> = ({ state, setState }) => {
  const refMenu = useRef<HTMLMenuElement>(null)
  const [closing, setClosing] = useState<boolean>(false)

  useEffect(() => {
    if (state) {
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.overflow = `auto`
    }
  }, [state, refMenu])

  useEffect(() => {
    closing && setTimeout(() => setClosing(false), 1500)
  }, [closing])

  return (
    <menu
      ref={refMenu}
      className={clsx(
        styles.menu,
        state && styles.active,
        closing && styles.hidden
      )}
    >
      <div className={styles.content}>
        <div className="flex items-center justify-between">
          <Logo type="secondary" />
          <Button
            onClick={() => {
              setState(false)
              setClosing(true)
            }}
            type="common"
          >
            Close
          </Button>
        </div>
        <div className={styles.middle}>
          <div className={styles.list}>
            <ul>
              {menuLinks.map((link, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    useAnchor(link.href)
                    setState(false)
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
          <div className={styles.button}>
            <Button
              onClick={() => {
                useAnchor('#contact')
                setState(false)
                setClosing(true)
              }}
              type="radio"
            >
              Get in touch
            </Button>
          </div>
        </div>
        <SocialLinks direction="row" type="secondary" data={socialLinks} />
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
