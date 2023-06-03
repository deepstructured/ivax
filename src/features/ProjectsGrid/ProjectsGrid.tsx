import { FC, useState, useEffect } from 'react'
import { animation } from './animation'
import styles from './ProjectsGrid.module.scss'
import { Button } from '../../shared/Button/Button'
import { ProjectCard } from '../../entities/ProjectCard/ProjectCard'

interface IProps {
  data: any[]
}

export const ProjectsGrid: FC<IProps> = ({ data }) => {
  const [projectsPerView, setProjectsPerView] = useState<number>(8)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLDivElement>(
      `.${styles.grid} > div`
    )

    animation(elements)
  }, [])

  return (
    <div className={styles.projectsGrid}>
      <div className={styles.grid}>
        {data.slice(0, projectsPerView).map((project) => (
          <ProjectCard
            key={project.thumbnail}
            title={project.title}
            thumbnail={project.thumbnail}
            category={project.category}
          />
        ))}
      </div>
      <div className="reveal bottom">
        <Button type="circle">Load more projects</Button>
      </div>
    </div>
  )
}
