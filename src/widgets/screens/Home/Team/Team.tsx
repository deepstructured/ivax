import styles from './Team.module.scss'

export const Team = () => {
  return (
    <section className={styles.team}>
      <div className="section-space"></div>
      <div className={styles.wrapper}>
        <h2>
          <span className="yellow">Team</span> that Builds Ideas Driven by the
          Future
        </h2>
      </div>
      <div className="section-space"></div>
    </section>
  )
}
