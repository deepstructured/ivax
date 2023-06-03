import { gsap } from 'gsap'

export const animation = (elements: NodeListOf<HTMLImageElement>) => {
  Array.from(elements).map((el) => {
    gsap.set(el, { opacity: 0, x: `-15%`, y: `15%` })

    const childNodes = el.parentElement?.childNodes
    const arrNodes = childNodes && Array.from(childNodes)

    const idx = arrNodes?.indexOf(el)

    const scrollTrigger = ScrollTrigger.create({
      trigger: el.parentElement,
      start: 'top 80%',
      onEnter: () =>
        gsap.to(el, {
          opacity: 1,
          duration: 1,
          x: 0,
          y: 0,
          delay: idx && 0.125 * idx,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }),
    })
  })
}
