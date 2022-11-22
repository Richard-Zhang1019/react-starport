import { RouteObject } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'

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
