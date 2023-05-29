import { Testimonial } from '../../../../entities/Testimonial/Testimonial'
import { useState, useRef, useEffect } from 'react'
import { testimonialsData } from '../../../../entities/Testimonial/data'
import styles from './Testimonials.module.scss'

import { SliderArrow } from '../../../../shared/SliderArrow/SliderArrow'
import clsx from 'clsx'

export const Testimonials = () => {
  const [data, setData] = useState<any[]>(testimonialsData)
  const [activeId, setActiveId] = useState<number>(0)
  const [activeTestimonial, setActiveTestimonial] = useState(data[activeId])

  const [slideWidth, setSlideWidth] = useState<number>(0)

  const refSlider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setActiveTestimonial(data[activeId])
  }, [activeId])

  useEffect(() => {
    transformSlider()
  }, [activeId])

  useEffect(() => {
    const slide = document.querySelector(`.${styles.slide}`) as HTMLDivElement

    slide && setSlideWidth(slide.offsetWidth)
  }, [])

  const transformSlider = () => {
    if (refSlider.current) {
      refSlider.current.style.transform = `translate3d(-${
        slideWidth * activeId
      }px, 0px, 0px)`
    }
  }

  const slideNext = () => {
    if (activeId !== data.length - 1) {
      setActiveId(activeId + 1)
    }
  }

  const slidePrev = () => {
    if (activeId !== 0) {
      setActiveId(activeId - 1)
    }
  }

  return (
    <section className={styles.testimonials}>
      <div className="section-space"></div>
      <div className={styles.wrapper}>
        <h2>
          What our clients <span className="yellow">say about us</span>
        </h2>
        <div className={styles.info}>
          <div className={styles.num}>
            <span className="yellow">{activeId + 1}</span>/{data.length}
          </div>
          <div className={styles.slider}>
            <div className={styles.testimonialsSlider}>
              <div ref={refSlider} className={styles.slider}>
                {data.map((slide, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveId(idx)
                    }}
                    className={clsx(
                      styles.slide,
                      activeId === idx && styles.active
                    )}
                  >
                    <img src={slide.photo} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <Testimonial
              position={activeTestimonial.position}
              author={activeTestimonial.author}
              text={activeTestimonial.text}
            />
            <div className={styles.arrows}>
              <SliderArrow
                onClick={() => {
                  slidePrev()
                }}
                direction="left"
                active={activeId !== 0 && true}
              />
              <SliderArrow
                direction="right"
                onClick={() => {
                  slideNext()
                }}
                active={activeId !== data.length - 1}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-space"></div>
    </section>
  )
}
