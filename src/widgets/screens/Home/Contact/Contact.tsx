import { ContactForm } from '../../../../features/ContactForm/ContactForm'
import MapLocation from '../../../../features/GoogleMap/GoogleMap'
import styles from './Contact.module.scss'

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container space-bottom">
        <div className={styles.wrapper}>
          <div className={styles.contactForm}>
            <div className={styles.form}>
              <ContactForm />
            </div>
          </div>
          <div className={styles.map}>
            <MapLocation />
          </div>
        </div>
      </div>
    </section>
  )
}
