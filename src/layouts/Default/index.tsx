import { Outlet } from 'react-router-dom'

import Sidebar from '@/components/Sidebar'

export default function DefaultLayout() {
  return (
    <section className="layout layout--default">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </section>
  )
}
