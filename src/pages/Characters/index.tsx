import { Link } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'

export default function HomePage() {
  return (
    <DefaultLayout>
      <section className="characters">
        <h1>Characters</h1>
        <List>
          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/characters/1`}>Character 1</Link>
              </h3>
            </header>
          </Card>

          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/characters/2`}>Character 2</Link>
              </h3>
            </header>
          </Card>

          <Card>
            <img src="https://placehold.co/150x150" alt="" />
            <header>
              <h3>
                <Link to={`/characters/3`}>Character 3</Link>
              </h3>
            </header>
          </Card>
        </List>
      </section>
    </DefaultLayout>
  )
}
