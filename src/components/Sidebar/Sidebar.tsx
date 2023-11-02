import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <Link to="/">Characters</Link>
        <Link to="/">Vehicles</Link>
        <Link to="/">Planets</Link>
      </nav>
    </aside>
  )
}
