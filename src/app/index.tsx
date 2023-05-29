import { pages } from '../pages'
import { Route } from 'react-router-dom'
import { WithRoutes } from './providers/WithRoutes'
import { WithSmoothScroll } from './providers/WithSmoothScroll'
import { Layout } from '../widgets/Layout/Layout'

const App = () => {
  return (
    <WithRoutes>
      {pages.map((page) => (
        <Route
          path={page.path}
          element={
            <WithSmoothScroll>
              {<Layout>{page.element}</Layout>}
            </WithSmoothScroll>
          }
          key={page.path}
        ></Route>
      ))}
    </WithRoutes>
  )
}

export default App
