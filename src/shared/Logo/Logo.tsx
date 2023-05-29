import styles from './Logo.module.scss'
import LogoImage from '/images/logo.svg'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoImage} alt="" />
    </div>
  )
}
