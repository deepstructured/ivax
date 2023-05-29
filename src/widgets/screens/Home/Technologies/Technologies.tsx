import { LogosGrid } from '../../../../features/LogosGrid/LogosGrid'
import { technologiesData } from './data'

export const Technologies = () => {
  return (
    <section className="gray">
      <h2>
        Our <span className="yellow">technologies</span>
      </h2>
      <LogosGrid data={technologiesData} />
    </section>
  )
}
