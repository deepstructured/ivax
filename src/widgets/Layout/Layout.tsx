import { FC, ReactNode, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import { Menu } from '../Menu/Menu'
import { WithSmoothScroll } from '../../app/providers/WithSmoothScroll'

interface IProps {
  children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  return (
    <>
      <WithSmoothScroll>
        <main>
          {children}
          <Footer />
        </main>
      </WithSmoothScroll>
      <Menu state={activeMenu} setState={setActiveMenu} />
      <Sidebar setMenu={setActiveMenu} />
    </>
  )
}
