import { LogosGrid } from '../../../../features/LogosGrid/LogosGrid'
import { technologiesData } from './data'

export const Technologies = () => {
  return (
    <section id="our-technologies" className="gray">
      <div className="container">
        <h2>
          Our <span className="yellow">technologies</span>
        </h2>
        <LogosGrid data={technologiesData} />
      </div>
    </section>
  )
}
