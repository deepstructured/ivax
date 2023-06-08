import { Player } from '@lottiefiles/react-lottie-player'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Preloader.module.scss'
import { Dispatch, SetStateAction, FC, useRef } from 'react'
import clsx from 'clsx'

interface IProps {
  pageLoaded: boolean
  setPageLoaded: Dispatch<SetStateAction<boolean>>
}

export const Preloader: FC<IProps> = ({ setPageLoaded, pageLoaded }) => {
  return (
    <div className={clsx(styles.preloader, pageLoaded && styles.hidden)}>
      <div className={styles.logo}>
        <Logo type="secondary" />
      </div>
      <div className="bulbWrapper">
        <div className="shadow"></div>
        <div className="content">
          <Player
            className="wavingBubbles"
            autoplay
            speed={1.25}
            onEvent={(event) => {
              if (event === 'complete') {
                setPageLoaded(true)
              }
            }}
            src="/animations/preloader-bubbles.json"
          ></Player>

          <Player
            className="innerBubbles"
            autoplay
            loop
            src="/animations/inner-bubbles.json"
          ></Player>
          {window.innerWidth > 565 && (
            <Player
              className="innerBubbles bubblesCopy"
              autoplay
              loop
              src="/animations/inner-bubbles.json"
            ></Player>
          )}
          <img className="bulb" src="/images/bulb-hero.png" alt="" />
        </div>
      </div>
    </div>
  )
}
