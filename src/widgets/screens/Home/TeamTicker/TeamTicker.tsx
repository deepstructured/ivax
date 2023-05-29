import { Ticker } from '../../../../entities/Ticker/Ticker'
import styles from './TeamTicker.module.scss'

export const TeamTicker = () => {
  return (
    <section className={styles.teamTicker}>
      <Ticker direction="left" colorType="colored">
        UX _ Our Team _ Our Team_Our Team
      </Ticker>
      <Ticker direction="right" colorType="transparent">
        UX _ Our Team _ Our Team_Our Team
      </Ticker>
    </section>
  )
}
