import { LogosGrid } from '../../../../features/LogosGrid/LogosGrid'
import { partnersData } from './data'

export const Partners = () => {
  return (
    <section className="gray">
      <h2>
        They <span className="yellow">trust us</span>
      </h2>
      <LogosGrid data={partnersData} />
    </section>
  )
}
