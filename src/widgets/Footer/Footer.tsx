import { Logo } from '../../shared/Logo/Logo'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={styles.col}>
          <h3>Communication</h3>
          <ul>
            <li>
              <a href="tel:+380322958453">+38 (032) 295 84 53</a>
            </li>
            <li className="yellow">
              <a href="mailto:ivax_dev@gmail.com">ivax_dev@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Address</h3>
          <li>
            Lviv, Ukraine
            <br />
            st. Zalizniaka 21
          </li>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <span>Copyright © 2022 IVAX</span>
        <ul>
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
