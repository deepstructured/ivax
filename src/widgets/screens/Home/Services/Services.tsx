import { ServicesGroup } from '../../../../features/ServicesGroup/ServicesGroup'
import styles from './Services.module.scss'
import { servicesData } from './data'

export const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container space-top space-bottom">
        <div className={styles.wrapper}>
          <h2>
            We <span className="yellow">delivery</span>
          </h2>
          <ServicesGroup data={servicesData} />
          <img src="/images/bulb.png" alt="" className={styles.bulb} />
        </div>
      </div>
    </section>
  )
}
