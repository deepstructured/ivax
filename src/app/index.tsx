import { pages } from '../pages'
import { Route } from 'react-router-dom'
import { WithRoutes } from './providers/WithRoutes'
import { Layout } from '../widgets/Layout/Layout'
import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const App = () => {
  useEffect(() => useReveal(), [])

  return (
    <WithRoutes>
      {pages.map((page) => (
        <Route
          path={page.path}
          element={<Layout>{page.element}</Layout>}
          key={page.path}
        ></Route>
      ))}
    </WithRoutes>
  )
}

export default App
