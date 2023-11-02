import { ReactNode } from 'react'

type TProps = {
  children: ReactNode
  className?: string
}

export default function List(props: TProps) {
  const { children, className = '' } = props

  return (
    <div>
      <section className={`list ${className}`}>{children}</section>
    </div>
  )
}
