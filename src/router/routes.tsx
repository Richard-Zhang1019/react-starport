import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'about/:id',
    element: <About />
  },
  {
    path: '*',
    element: <NotFound />
  }
] as RouteObject[]

export default routes
