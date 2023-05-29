import clsx from 'clsx'
import { Button } from '../../../../shared/Button/Button'
import { Logo } from '../../../../shared/Logo/Logo'
import styles from './Hero.module.scss'
import { Statistics } from '../../../../features/Statistics/Statistics'
import { statisticsData } from './data'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <div className={styles.title}>
            <h1>Paint</h1>
            <h1>your thoughts</h1>
            <h1>
              with <span className="yellow">IVAX</span>
            </h1>
          </div>
          <div
            className={clsx(
              'flex justify-end items-center gap-40',
              styles.buttons
            )}
          >
            <Button type="common">Portfolio</Button>
            <Button type="circle">Check with us</Button>
          </div>
        </div>
        <div className={styles.picture}></div>
      </div>
      <div className={styles.statistics}>
        <Statistics data={statisticsData} />
      </div>
    </section>
  )
}
