import clsx from 'clsx'
import { Button } from '../../../../shared/Button/Button'
import { Logo } from '../../../../shared/Logo/Logo'
import styles from './Hero.module.scss'
import { Statistics } from '../../../../features/Statistics/Statistics'
import { statisticsData } from './data'
import { useAnchor } from '../../../../hooks/useAnchor'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.logo}>
          <Logo type="primary" />
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
              <Button onClick={() => useAnchor('#portfolio')} type="common">
                Portfolio
              </Button>
              <Button onClick={() => useAnchor('#contact')} type="circle">
                Check with us
              </Button>
            </div>
          </div>
          <div className={styles.picture}></div>
        </div>
        <div className={styles.statistics}>
          <Statistics data={statisticsData} />
        </div>
      </div>
    </section>
  )
}
