import { Link } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'

export default function PlanetsPage() {
  return (
    <DefaultLayout>
      <section className="planets">
        <h1>planets</h1>
        <List>
          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/planets/1`}>Planet 1</Link>
              </h3>
            </header>
          </Card>

          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/planets/1`}>Planet 2</Link>
              </h3>
            </header>
          </Card>

          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/planets/1`}>Planet 3</Link>
              </h3>
            </header>
          </Card>
        </List>
      </section>
    </DefaultLayout>
  )
}
