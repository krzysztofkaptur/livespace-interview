import { ReactNode } from 'react'

import Sidebar from '@/components/Sidebar'

type TProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: TProps) {
  return (
    <section>
      <Sidebar />
      {children}
    </section>
  )
}
