import { Link } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'

export default function VehiclesPage() {
  return (
    <DefaultLayout>
      <section className="vehicles">
        <h1>vehicles</h1>
        <List>
          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/vehicles/1`}>Vehicle 1</Link>
              </h3>
            </header>
          </Card>

          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/vehicles/1`}>Vehicle 2</Link>
              </h3>
            </header>
          </Card>

          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/vehicles/1`}>Vehicle 3</Link>
              </h3>
            </header>
          </Card>
        </List>
      </section>
    </DefaultLayout>
  )
}
