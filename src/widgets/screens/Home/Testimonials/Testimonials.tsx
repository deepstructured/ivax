import { Testimonial } from '../../../../entities/Testimonial/Testimonial'
import { useState } from 'react'
import { testimonialsData } from '../../../../entities/Testimonial/data'
import styles from './Testimonials.module.scss'
import { SliderArrow } from '../../../../shared/SliderArrow/SliderArrow'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import './slider.scss'
import 'swiper/css'

export const Testimonials = () => {
  const [data, setData] = useState<any[]>(testimonialsData)
  const [activeId, setActiveId] = useState<number>(0)
  const [activeTestimonial, setActiveTestimonial] = useState(data[activeId])
  const [swiper, setSwiper] = useState<any>()

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container space-top">
        <div className={styles.wrapper}>
          <h2>
            What our clients <span className="yellow">say about us</span>
          </h2>
          <div className={styles.info}>
            <div className={styles.num}>
              <span className="yellow">{activeId + 1}</span>/{data.length}
            </div>
            <div className={styles.testimonialsSlider}>
              <Swiper
                slidesPerView={4}
                loop={true}
                speed={1500}
                className="testimonials-slider"
                onSwiper={(swiper) => setSwiper(swiper)}
              >
                {testimonialsData.map((item) => (
                  <SwiperSlide>
                    <img src={item.photo} alt="" />
                  </SwiperSlide>
                ))}
                {testimonialsData.map((item) => (
                  <SwiperSlide>
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
                  onClick={() => {
                    swiper.slidePrev()
                  }}
                  direction="left"
                />
                <SliderArrow
                  direction="right"
                  onClick={() => {
                    swiper.slideNext()
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
