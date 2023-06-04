import { useEffect, useRef } from 'react'
import { LogosGrid } from '../../../../features/LogosGrid/LogosGrid'
import { partnersData } from './data'
import { useReveal } from '../../../../hooks/useReveal'

export const Partners = () => {
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
    <section ref={refSection} id="partners" className="gray">
      <div className="container">
        <h2>
          <span className="reveal left">They</span>{' '}
          <span className="yellow reveal right">trust us</span>
        </h2>
        <LogosGrid data={partnersData} />
      </div>
    </section>
  )
}
