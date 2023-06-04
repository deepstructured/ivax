import { useEffect, useRef } from 'react'
import { TeamSlider } from '../../../../features/TeamSlider/TeamSlider'
import { teamData } from './data'
import styles from './Team.module.scss'
import { useReveal } from '../../../../hooks/useReveal'

export const Team = () => {
  const refSection = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (refSection.current) {
      useReveal(
        Array.from(
          refSection.current.querySelectorAll<HTMLElement>('h2 > span')
        ),
        {
          opacity: 1,
          x: 0,
          duration: 1,
        }
      )
    }
  }, [])

  return (
    <section ref={refSection} id="team" className={styles.team}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>
            <span className="yellow reveal left">Team</span>{' '}
            <span className="reveal right">
              that Builds Ideas Driven by the Future
            </span>
          </h2>
          <TeamSlider data={teamData} />
        </div>
      </div>
    </section>
  )
}
