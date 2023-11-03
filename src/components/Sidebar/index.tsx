import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <NavLink to="/">Characters</NavLink>
        <NavLink to="/vehicles">Vehicles</NavLink>
        <NavLink to="/planets">Planets</NavLink>
      </nav>
    </aside>
  )
}
