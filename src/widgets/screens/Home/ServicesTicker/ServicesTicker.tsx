import { Ticker } from '../../../../entities/Ticker/Ticker'

export const ServicesTicker = () => {
  return (
    <section className={'ticker'}>
      <div className="container">
        <Ticker direction="left" colorType="colored">
          UX _ Web development _ Brand identity
        </Ticker>
        <Ticker direction="right" colorType="transparent">
          UX _ Mobile apps _ Video _ Filmmaking
        </Ticker>
      </div>
    </section>
  )
}
