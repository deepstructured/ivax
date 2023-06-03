import clsx from 'clsx'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.body}>
          <ul className={styles.col}>
            <h3 data-start="100%" className="reveal top">
              Communication
            </h3>
            <ul>
              <li data-start="100%" className="reveal bottom">
                <a href="tel:+380322958453">+38 (032) 295 84 53</a>
              </li>
              <li data-start="100%" className="yellow reveal bottom">
                <a href="mailto:ivax_dev@gmail.com">ivax_dev@gmail.com</a>
              </li>
            </ul>
          </ul>
          <ul className={styles.col}>
            <h3 data-start="100%" className="reveal top">
              Address
            </h3>
            <li data-start="100%" className="reveal bottom">
              Lviv, Ukraine
              <br />
              st. Zalizniaka 21
            </li>
          </ul>
        </div>
        <div className={styles.down}>
          <div data-start="100%" className={clsx(styles.logo, 'reveal bottom')}>
            <Logo type="primary" />
          </div>
          <span data-start="100%" className="reveal bottom">
            Copyright © 2022 IVAX
          </span>
          <ul>
            <li data-start="100%" className="reveal bottom">
              <a href="/terms-of-use">Terms of Use</a>
            </li>
            <li data-start="100%" className="reveal bottom">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
