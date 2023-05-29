import React from 'react'

import styles from './Home.module.scss'
import { homeScreens } from '../../widgets/screens/Home'

export const Home = () => {
  return (
    <div className={styles.home}>
      {homeScreens.map((screen) => (
        <React.Fragment key={screen.id}>{screen.element}</React.Fragment>
      ))}
    </div>
  )
}
