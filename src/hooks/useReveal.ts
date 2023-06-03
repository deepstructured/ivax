import { gsap } from 'gsap'

export const useReveal = () => {
  const elements = document.querySelectorAll<HTMLDataElement>('.reveal')

  Array.from(elements).map((el: HTMLDataElement) => {
    const anim = gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      duration: 1,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      paused: true,
      delay: el.dataset.delay ?? 0,
    })

    ScrollTrigger.create({
      trigger: el,
      start: `top ${el.dataset.start ?? '75%'}`,
      end: `bottom 80%`,
      onEnter: () => anim.play(),
      once: true,
    })
  })
}
