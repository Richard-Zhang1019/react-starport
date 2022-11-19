import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Demo = lazy(() => import('@/pages/About'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/blog',
    element: <Demo />
  },
  {
    path: '*',
    element: <NotFound />
  }
] as RouteObject[]

export default routes
