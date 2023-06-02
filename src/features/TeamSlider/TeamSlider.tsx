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

  return (
    <div className="team-swiper">
      <Swiper
        slidesPerView={3}
        speed={750}
        loop={true}
        centeredSlides
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={() => swiper && setActiveId(swiper.activeIndex)}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.photo} alt="" className="photo" />
            <h3>{item.name}</h3>
            <p className="yellow position">{item.position}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-arrows">
        <SliderArrow onClick={() => swiper.slidePrev()} direction="left" />
        <SliderArrow onClick={() => swiper.slideNext()} direction="right" />
      </div>
    </div>
  )
}
