import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '@/components/Sidebar'

type TProps = {
  children: ReactNode
}

export default function DefaultLayout() {
  return (
    <section className="layout layout--default">
      <Sidebar />
      {/* {children} */}
      <main>
        <Outlet />
      </main>
    </section>
  )
}
