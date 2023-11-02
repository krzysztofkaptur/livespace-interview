import { createBrowserRouter } from 'react-router-dom'

import Characters from '@/pages/Characters'
import Planets from '@/pages/Planets'
import Vehicles from '@/pages/Vehicles'
import Character from '@/pages/Character'
import Planet from '@/pages/Planet'
import Vehicle from '@/pages/Vehicle'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Characters />
  },
  {
    path: '/characters/:id',
    element: <Character />
  },
  {
    path: '/planets',
    element: <Planets />
  },
  {
    path: '/planets/:id',
    element: <Planet />
  },
  {
    path: '/vehicles',
    element: <Vehicles />
  },
  {
    path: '/vehicles/:id',
    element: <Vehicle />
  }
])

export default routes
