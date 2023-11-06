import { ReactNode } from 'react'

import Pagination from '@/components/Pagination'

type TProps = {
  children: ReactNode
  className?: string
  total: number
  isLoading?: boolean
}

export default function List(props: TProps) {
  const { children, className = '', total = 0, isLoading = false } = props

  return (
    <section className="list">
      {!isLoading ? (
        <>
          <section className={`list__container ${className}`}>
            {children}
          </section>

          {total ? <Pagination total={total} /> : null}
        </>
      ) : (
        <h3>loading...</h3>
      )}
    </section>
  )
}
