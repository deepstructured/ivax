import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { EffectCoverflow } from 'swiper'
import 'swiper/swiper.css'
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
        speed={500}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={() => swiper && setActiveId(swiper.activeIndex)}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 5,
          slideShadows: false,
        }}
        slidesPerView={3}
        centeredSlides
      >
        {data.map((item) => (
          <SwiperSlide key={item.photo}>
            <img src={item.photo} alt="" className="photo" />
            <h3>{item.name}</h3>
            <p className="yellow position">{item.position}</p>
          </SwiperSlide>
        ))}
        {data.map((item) => (
          <SwiperSlide key={item.photo}>
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
