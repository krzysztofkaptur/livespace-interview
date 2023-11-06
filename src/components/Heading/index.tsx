import { ReactNode } from 'react'

type TProps = {
  children: ReactNode
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

export default function Heading(props: TProps) {
  const { children, level = 'h2', className = '' } = props
  const CustomTag = level

  return (
    <header className={`heading ${className}`}>
      <CustomTag>{children}</CustomTag>
    </header>
  )
}
