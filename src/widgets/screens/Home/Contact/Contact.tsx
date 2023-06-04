import { useEffect, useRef } from 'react'
import { ContactForm } from '../../../../features/ContactForm/ContactForm'
import MapLocation from '../../../../features/GoogleMap/GoogleMap'
import styles from './Contact.module.scss'
import { useReveal } from '../../../../hooks/useReveal'

export const Contact = () => {
  const refSection = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (refSection.current) {
      useReveal(
        refSection.current.querySelector(`.${styles.map}`) as HTMLElement,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
        }
      )
    }
  }, [])

  return (
    <section ref={refSection} id="contact" className={styles.contact}>
      <div className="container space-bottom space-top">
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
