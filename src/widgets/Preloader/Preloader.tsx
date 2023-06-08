import { Player } from '@lottiefiles/react-lottie-player'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Preloader.module.scss'
import { useContext, useState } from 'react'
import clsx from 'clsx'
import { Store } from '../../app/providers/store'

export const Preloader = () => {
  const { pageLoaded, setPageLoaded } = useContext(Store)
  const [active, setActive] = useState<boolean>(true)

  return (
    <div className={clsx(styles.preloader, !active && styles.hidden)}>
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
                setActive(false)
                setTimeout(() => setPageLoaded(true), 1250)
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
