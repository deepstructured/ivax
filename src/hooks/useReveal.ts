import { gsap } from 'gsap'

export const useReveal = (
  selector: HTMLElement | HTMLElement[],
  enterParams: { [key: string]: any },
  leaveParams?: { [key: string]: any } | false,
  trigger?: HTMLElement | null,
  paused: boolean = true,
  animEnd: string = `bottom 20%`,
  animStart: string = `top 75%`
) => {
  function registerAnim(element: HTMLElement) {
    const animEnter = gsap.to(element, {
      ...enterParams,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      paused: paused,
      delay: Object.keys(enterParams).includes('delay')
        ? enterParams['delay']
        : 0,
    })

    if (leaveParams) {
      const animLeave = gsap.to(element, {
        ...leaveParams,
        paused: paused,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        delay: Object.keys(leaveParams).includes('delay')
          ? leaveParams['delay']
          : 0,
      })

      ScrollTrigger.create({
        trigger: trigger ?? element,
        start: animStart,
        end: animEnd,
        onLeave: () =>
          gsap.to(element, {
            opacity: 0,
            duration: 2,
          }),
        onEnter: () =>
          gsap.to(element, {
            opacity: 1,
            duration: 2,
          }),
        onEnterBack: () =>
          gsap.to(element, {
            opacity: 1,
            duration: 2,
          }),
        onLeaveBack: () =>
          gsap.to(element, {
            opacity: 0,
            duration: 2,
          }),
        // onLeave: () => animLeave.play(),
        // onEnter: () => animEnter.play(),
        // onEnterBack: () =>
        //   gsap.to(element, {
        //     ...enterParams,
        //     ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        //     delay: Object.keys(enterParams).includes('delay')
        //       ? enterParams['delay']
        //       : 0,
        //   }),
        // onLeaveBack: () =>
        //   gsap.to(element, {
        //     ...leaveParams,
        //     ...enterParams,
        //     ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
        //     delay: Object.keys(enterParams).includes('delay')
        //       ? enterParams['delay']
        //       : 0,
        //   }),
      })
    } else {
      ScrollTrigger.create({
        trigger: element,
        start: animStart,
        end: animEnd,
        onEnter: () => animEnter.play(),
      })
    }
  }

  if (!Array.isArray(selector)) {
    registerAnim(selector)
  } else {
    selector.map((el) => registerAnim(el))
  }
}
