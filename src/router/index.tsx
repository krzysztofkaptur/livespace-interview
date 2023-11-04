import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import Characters from '@/pages/Characters'
import Planets from '@/pages/Planets'
import Vehicles from '@/pages/Vehicles'
import Character from '@/pages/Character'
import Planet from '@/pages/Planet'
import Vehicle from '@/pages/Vehicle'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Characters />} />
      <Route path="/characters/:id" element={<Character />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/planets/:id" element={<Planet />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicles/:id" element={<Vehicle />} />
    </Route>
  )
)

export default router
