import { Player } from '@lottiefiles/react-lottie-player'
import { Logo } from '../../shared/Logo/Logo'
import styles from './Preloader.module.scss'
import { useContext, useState } from 'react'
import clsx from 'clsx'
import { Store } from '../../app/providers/store'

export const Preloader = () => {
  const { pageLoaded, setPageLoaded } = useContext(Store)
  const [active, setActive] = useState<boolean>(true)
  const [imageLoaded, setImagedLoaded] = useState<boolean>(false)

  return (
    <div className={clsx(styles.preloader, !active && styles.hidden)}>
      <div className={styles.logo}>
        <Logo type="secondary" />
      </div>
      <div className="bulbWrapper">
        <div className="shadow"></div>
        <div className="content">
          {imageLoaded && (
            <>
              <Player
                className="wavingBubbles"
                autoplay
                speed={1.25}
                onEvent={(event) => {
                  if (event === 'complete') {
                    setActive(false)
                    setTimeout(
                      () => setPageLoaded(true),
                      window.innerWidth > 768 ? 1250 : 1050
                    )
                  }
                }}
                src="/animations/preloader-bubbles.json"
              ></Player>

              <Player
                className="innerBubbles"
                autoplay
                loop
                src="/animations/preloader-inner-bubbles.json"
              ></Player>
              {window.innerWidth > 565 && (
                <Player
                  className="innerBubbles bubblesCopy"
                  autoplay
                  loop
                  src="/animations/preloader-inner-bubbles.json"
                ></Player>
              )}
            </>
          )}
          <img
            onLoad={() => setImagedLoaded(true)}
            className="bulb"
            src="/images/bulb-hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
