import { LogosGrid } from '../../../../features/LogosGrid/LogosGrid'
import { partnersData } from './data'

export const Partners = () => {
  return (
    <section id="partners" className="gray">
      <div className="container">
        <h2 className="reveal left">
          They <span className="yellow">trust us</span>
        </h2>
        <LogosGrid data={partnersData} />
      </div>
    </section>
  )
}
