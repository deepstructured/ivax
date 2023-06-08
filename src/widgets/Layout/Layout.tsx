import { FC, ReactNode, useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import { Preloader } from '../Preloader/Preloader'
import { Menu } from '../Menu/Menu'
import { WithSmoothScroll } from '../../app/providers/WithSmoothScroll'

interface IProps {
  children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [pageLoaded, setPageLoaded] = useState<boolean>(false)

  useEffect(() => {
    !pageLoaded
      ? (document.body.style.overflow = `hidden`)
      : (document.body.style.overflow = `auto`)
  }, [pageLoaded])

  return (
    <>
      <Preloader pageLoaded={pageLoaded} setPageLoaded={setPageLoaded} />
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
