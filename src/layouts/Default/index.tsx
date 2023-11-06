import { Outlet } from 'react-router-dom'

import Sidebar from '@/components/Sidebar'
import Background from '@/components/Background'

import { sidebarRoutes } from '@/config/router'

export default function DefaultLayout() {
  return (
    <section className="layout layout--default">
      <Background />
      <Sidebar routes={sidebarRoutes} />
      <main className="main">
        <Outlet />
      </main>
    </section>
  )
}
