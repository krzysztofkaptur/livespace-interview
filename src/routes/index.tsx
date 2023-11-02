import { createBrowserRouter } from 'react-router-dom'

import HomePage from '@/pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  }
])

export default routes
