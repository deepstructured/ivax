import { Testimonial } from '../../../../entities/Testimonial/Testimonial'
import { useState, useEffect, useRef } from 'react'
import { testimonialsData } from '../../../../entities/Testimonial/data'
import styles from './Testimonials.module.scss'
import { SliderArrow } from '../../../../shared/SliderArrow/SliderArrow'
import { Swiper, SwiperSlide } from 'swiper/react'
import './slider.scss'
import 'swiper/css'
import clsx from 'clsx'
import { useReveal } from '../../../../hooks/useReveal'

export const Testimonials = () => {
  const [data, setData] = useState<any[]>(testimonialsData)
  const [activeId, setActiveId] = useState<number>(0)
  const [activeTestimonial, setActiveTestimonial] = useState(data[activeId])
  const [swiper, setSwiper] = useState<any>()
  const refSection = useRef<HTMLDivElement>(null)
  const [delay, setDelay] = useState<boolean>(false)

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

  const toggleDelay = () => {
    setDelay(true)

    setTimeout(() => setDelay(false), 1250)
  }

  const handleSlide = (direction: 'prev' | 'next') => {
    if (!delay) {
      if (direction === 'prev') {
        if (window.innerWidth > 768) {
          swiper.slideNext()
        } else {
          swiper.slidePrev()
        }
      }

      if (direction === 'next') {
        if (window.innerWidth > 768) {
          swiper.slidePrev()
        } else {
          swiper.slideNext()
        }
      }
    }
  }

  useEffect(() => console.log(activeId), [activeId])

  return (
    <section ref={refSection} id="testimonials" className={styles.testimonials}>
      <div className="container space-top">
        <div className={styles.wrapper}>
          <h2>
            <span className="reveal left">What our clients</span>{' '}
            <span className="yellow reveal right">say about us</span>
          </h2>
          <div className={styles.info}>
            <div className={styles.num}>
              <span className="yellow">{activeTestimonial.id}</span>/
              {data.length / 2}
            </div>
            <div className={styles.testimonialsSlider}>
              <Swiper
                allowTouchMove={window.innerWidth > 768 ? false : true}
                slidesPerView={window.innerWidth > 768 ? 4 : 'auto'}
                speed={750}
                loop={true}
                className="testimonials-slider"
                onSlideChange={() => {
                  setActiveId(swiper.realIndex)
                  console.log(swiper)
                  setActiveTestimonial(data[swiper.realIndex])
                }}
                onSwiper={(swiper) => setSwiper(swiper)}
              >
                {testimonialsData.map((item, idx) => (
                  <SwiperSlide className="cursor-scale" key={idx}>
                    <img src={item.photo} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.content}>
              <Testimonial
                position={activeTestimonial.position}
                author={activeTestimonial.author}
                text={activeTestimonial.text}
              />
              <div className={styles.arrows}>
                <SliderArrow
                  direction="left"
                  onClick={() => {
                    handleSlide('prev')
                    toggleDelay()
                  }}
                />
                <SliderArrow
                  direction="right"
                  onClick={() => {
                    handleSlide('next')
                    toggleDelay()
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
