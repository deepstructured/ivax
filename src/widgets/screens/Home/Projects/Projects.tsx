import { useEffect, useRef, useState } from 'react'
import { ProjectsGrid } from '../../../../features/ProjectsGrid/ProjectsGrid'
import styles from './Projects.module.scss'
import { categoriesData, projectsData } from './data'
import { Filter } from '../../../../features/Filter/Filter'
import { useReveal } from '../../../../hooks/useReveal'

export const Projects = () => {
  const [data, setData] = useState<any[]>(projectsData)
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
    <section ref={refSection} id="portfolio" className={styles.projects}>
      <div className="container space-top space-bottom">
        <div className="flex items-center justify-between">
          <h2>
            <span className="reveal left">Latest</span>{' '}
            <span className="yellow reveal right">Projects</span>
          </h2>
          <Filter
            filteredData={data}
            setFilteredData={setData}
            filterKey="category"
            optionsData={categoriesData}
          />
        </div>
        <ProjectsGrid data={data} />
      </div>
    </section>
  )
}
