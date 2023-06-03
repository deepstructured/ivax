import { useState } from 'react'
import { ProjectsGrid } from '../../../../features/ProjectsGrid/ProjectsGrid'
import styles from './Projects.module.scss'
import { categoriesData, projectsData } from './data'
import { Filter } from '../../../../features/Filter/Filter'

export const Projects = () => {
  const [data, setData] = useState<any[]>(projectsData)

  return (
    <section id="portfolio" className={styles.projects}>
      <div className="container space-top space-bottom">
        <div className="flex items-center justify-between">
          <h2 className="reveal left">
            Latest <span className="yellow">Projects</span>
          </h2>
          <div className="reveal right">
            <Filter
              filteredData={data}
              setFilteredData={setData}
              filterKey="category"
              optionsData={categoriesData}
            />
          </div>
        </div>
        <ProjectsGrid data={data} />
      </div>
    </section>
  )
}
