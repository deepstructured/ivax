import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Footer.module.scss'
import { useRef, useEffect } from 'react'
import { useReveal } from '../../hooks/useReveal'

const Footer = () => {
  const refFooter = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (refFooter.current) {
      useReveal(
        Array.from(refFooter.current.querySelectorAll<HTMLElement>('.reveal')),
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.5,
        },
        false,
        refFooter.current,
        true,
        'bottom 100%',
        'top 100%'
      )
    }
  }, [])

  return (
    <footer ref={refFooter} className={styles.footer}>
      <div className="container">
        <div className={styles.body}>
          <ul className={styles.col}>
            <h3 className="reveal top">Communication</h3>
            <ul>
              <li className="reveal bottom">
                <a href="tel:+380322958453">+38 (032) 295 84 53</a>
              </li>
              <li className="yellow reveal bottom">
                <a href="mailto:ivax_dev@gmail.com">ivax_dev@gmail.com</a>
              </li>
            </ul>
          </ul>
          <ul className={styles.col}>
            <h3 className="reveal top">Address</h3>
            <li className="reveal bottom">
              Lviv, Ukraine
              <br />
              st. Zalizniaka 21
            </li>
          </ul>
        </div>
        <div className={styles.down}>
          <div className={clsx(styles.logo, 'reveal bottom')}>
            <Logo type="primary" />
          </div>
          <span className="reveal bottom">Copyright © 2022 IVAX</span>
          <ul>
            <li className="reveal bottom">
              <a href="/terms-of-use">Terms of Use</a>
            </li>
            <li className="reveal bottom">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
