import { useEffect, useRef } from 'react'
import { LogosGrid } from '../../../../features/LogosGrid/LogosGrid'
import { technologiesData } from './data'
import { useReveal } from '../../../../hooks/useReveal'

export const Technologies = () => {
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
    <section ref={refSection} id="our-technologies" className="gray">
      <div className="container">
        <h2>
          <span className="reveal left">Our</span>{' '}
          <span className="yellow reveal right">technologies</span>
        </h2>
        <LogosGrid data={technologiesData} />
      </div>
    </section>
  )
}
