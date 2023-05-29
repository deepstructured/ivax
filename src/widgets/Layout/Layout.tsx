import { FC, ReactNode } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'

interface IProps {
  children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <main>
        {children}
        <Footer />
      </main>
      <Sidebar />
    </>
  )
}
