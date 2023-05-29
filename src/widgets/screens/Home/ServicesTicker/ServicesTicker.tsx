import { Ticker } from '../../../../entities/Ticker/Ticker'
import styles from './ServicesTicker.module.scss'

export const ServicesTicker = () => {
  return (
    <section className={styles.servicesTicker}>
      <Ticker direction="left" colorType="colored">
        UX _ Web development _ Brand identity
      </Ticker>
      <Ticker direction="right" colorType="transparent">
        UX _ Mobile apps _ Video _ Filmmaking
      </Ticker>
    </section>
  )
}
