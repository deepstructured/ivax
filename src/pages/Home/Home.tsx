import React, { FC } from 'react'
import { homeScreens } from '../../widgets/screens/Home'

export const Home: FC = () => {
  return (
    <>
      {homeScreens.map((screen) => (
        <React.Fragment key={screen.id}>{screen.element}</React.Fragment>
      ))}
    </>
  )
}
