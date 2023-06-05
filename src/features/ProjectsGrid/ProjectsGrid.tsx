import { FC, useState, useEffect, useRef } from 'react'
import styles from './ProjectsGrid.module.scss'
import { Button } from '../../shared/Button/Button'
import { ProjectCard } from '../../entities/ProjectCard/ProjectCard'
import { useReveal } from '../../hooks/useReveal'
import { gsap } from 'gsap'

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
        y: `50%`,
      })

      useReveal(
        button,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
        },
        {
          opacity: 0,
          y: `50%`,
          duration: 1,
        }
      )
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
      <Button className={styles.button} type="circle">
        Load more projects
      </Button>
    </div>
  )
}
