import { TeamSlider } from '../../../../features/TeamSlider/TeamSlider'
import styles from './Team.module.scss'
import { teamData } from './data'

export const Team = () => {
  return (
    <section id="team" className={styles.team}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>
            <span className="yellow">Team</span> that Builds Ideas Driven by the
            Future
          </h2>
          <TeamSlider data={teamData} />
        </div>
      </div>
    </section>
  )
}
