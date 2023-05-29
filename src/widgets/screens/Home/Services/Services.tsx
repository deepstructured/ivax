import { ServicesGroup } from '../../../../features/ServicesGroup/ServicesGroup'
import styles from './Services.module.scss'
import { servicesData } from './data'

export const Services = () => {
  return (
    <section className={styles.services}>
      <div className="section-space"></div>
      <div className={styles.wrapper}>
        <h2>
          We <span className="yellow">deliver</span>
        </h2>
        <ServicesGroup data={servicesData} />
        <img src="/images/bulb.png" alt="" className={styles.bulb} />
      </div>
      <div className="section-space"></div>
    </section>
  )
}
