import clsx from 'clsx'
import { ContactForm } from '../../../../features/ContactForm/ContactForm'
import MapLocation from '../../../../features/GoogleMap/GoogleMap'
import styles from './Contact.module.scss'

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container space-bottom space-top">
        <div className={styles.wrapper}>
          <div className={styles.contactForm}>
            <div className={clsx(styles.form, 'reveal left')}>
              <ContactForm />
            </div>
          </div>
          <div className={clsx(styles.map, 'reveal right')}>
            <MapLocation />
          </div>
        </div>
      </div>
    </section>
  )
}
