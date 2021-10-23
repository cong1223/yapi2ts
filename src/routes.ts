import { RouteConfig } from 'react-router-config'
import Layout from '@/layout'
import Home from '@/views/Home'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

export default routes
