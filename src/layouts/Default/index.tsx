import { Outlet } from 'react-router-dom'

import Sidebar from '@/components/Sidebar'

import { sidebarRoutes } from '@/config/router'

export default function DefaultLayout() {
  return (
    <section className="layout layout--default">
      <Sidebar routes={sidebarRoutes} />
      <main>
        <Outlet />
      </main>
    </section>
  )
}
