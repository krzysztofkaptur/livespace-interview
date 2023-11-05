import { NavLink } from 'react-router-dom'

import { TRoute } from '@/types/general'

type TProps = {
  routes: TRoute[]
}

export default function Sidebar(props: TProps) {
  const { routes } = props

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        {routes.map(link => (
          <NavLink key={link.label} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
