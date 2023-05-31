import { Ticker } from '../../../../entities/Ticker/Ticker'

export const TeamTicker = () => {
  return (
    <section className="ticker">
      <div className="container">
        <Ticker direction="left" colorType="colored">
          UX _ Our Team _ Our Team_Our Team
        </Ticker>
        <Ticker direction="right" colorType="transparent">
          UX _ Our Team _ Our Team_Our Team
        </Ticker>
      </div>
    </section>
  )
}
