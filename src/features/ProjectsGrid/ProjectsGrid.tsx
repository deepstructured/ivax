import { FC, useState } from 'react'
import styles from './ProjectsGrid.module.scss'
import { Button } from '../../shared/Button/Button'
import { ProjectCard } from '../../entities/ProjectCard/ProjectCard'

interface IProps {
  data: any[]
}

export const ProjectsGrid: FC<IProps> = ({ data }) => {
  const [projectsPerView, setProjectsPerView] = useState<number>(8)

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
      <Button type="circle">Load more projects</Button>
    </div>
  )
}
