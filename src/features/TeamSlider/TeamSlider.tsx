import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow } from 'swiper'
import './TeamSlider.scss'
import { SliderArrow } from '../../shared/SliderArrow/SliderArrow'

SwiperCore.use([EffectCoverflow])

interface IProps {
  data: any[]
}

export const TeamSlider: FC<IProps> = ({ data }) => {
  const [swiper, setSwiper] = useState<any>(null)
  const [activeId, setActiveId] = useState<number>(0)

  useEffect(() => {
    if (typeof swiper === 'object' && !!swiper) {
      if (swiper.destroyed !== true) {
        swiper.slideTo(3)
      }
    }
  }, [swiper])

  return (
    <div className="team-swiper">
      <Swiper
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        speed={500}
        centeredSlides={window.innerWidth > 565 ? false : true}
        slidesPerView={window.innerWidth > 565 ? 3 : 1}
        loop={true}
        loopedSlides={2}
        allowTouchMove={window.innerWidth > 565 ? false : true}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={() => swiper && setActiveId(swiper.activeIndex)}
      >
        {data.map((item, idx) => (
          <SwiperSlide className="cursor-scale" key={idx}>
            <div>
              <img src={item.photo} alt="" className="photo" />
              <h3>{item.name}</h3>
              <p className="yellow position">{item.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-arrows">
        <SliderArrow
          onClick={() => {
            swiper.slidePrev()
          }}
          direction="left"
        />
        <SliderArrow
          onClick={() => {
            swiper.slideNext()
          }}
          direction="right"
        />
      </div>
    </div>
  )
}
