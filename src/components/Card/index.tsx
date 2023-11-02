import { ReactNode } from 'react'

type TProps = {
  children: ReactNode
}

export default function Card({ children }: TProps) {
  return <article>{children}</article>
}
