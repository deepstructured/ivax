import { FC, useState, useEffect, useRef } from 'react'
import styles from './ProjectsGrid.module.scss'
import { Button } from '../../shared/Button/Button'
import { ProjectCard } from '../../entities/ProjectCard/ProjectCard'
import { useReveal } from '../../hooks/useReveal'
import { gsap } from 'gsap'
import { projectsData } from '../../widgets/screens/Home/Projects/data'

interface IProps {
  data: any[]
}

export const ProjectsGrid: FC<IProps> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [projectsPerView, setProjectsPerView] = useState<number>(8)

  useEffect(() => {
    if (ref.current) {
      const button = ref.current.querySelector<HTMLButtonElement>(
        `.${styles.button}`
      ) as HTMLButtonElement

      gsap.set(button, {
        opacity: 0,
        y: `100%`,
      })

      ScrollTrigger.create({
        trigger: button,
        start: `top 80%`,
        end: `bottom 20%`,
        onLeave: () =>
          gsap.to(button, {
            opacity: 0,
            y: `100%`,
            duration: 1,
          }),
        onEnter: () =>
          gsap.to(button, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
          }),
        onEnterBack: () =>
          gsap.to(button, {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
          }),
        onLeaveBack: () =>
          gsap.to(button, {
            opacity: 0,
            y: `100%`,
            duration: 1,
          }),
      })
    }
  }, [])

  return (
    <div ref={ref} className={styles.projectsGrid}>
      <div className={styles.grid}>
        {data &&
          data
            .slice(0, projectsPerView)
            .map((project, idx) => (
              <ProjectCard
                id={idx}
                key={project.thumbnail}
                title={project.title}
                thumbnail={project.thumbnail}
                category={project.category}
              />
            ))}
      </div>
      {projectsPerView !== projectsData.length && (
        <Button
          onClick={() => setProjectsPerView(projectsData.length)}
          className={styles.button}
          type="circle"
        >
          Load more projects
        </Button>
      )}
    </div>
  )
}
