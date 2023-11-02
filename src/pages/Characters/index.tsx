import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'

import { fetchCharacters } from '@/services/characters'

export default function HomePage() {
  const { data: characters } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters
  })

  return (
    <DefaultLayout>
      <section className="characters">
        <h1>Characters</h1>
        <List>
          {characters?.results?.map(character => (
            <Card>
              <img src="https://placehold.co/150x150" alt="" />
              <header>
                <h3>
                  <Link to={`/characters/1`}>{character.name}</Link>
                </h3>
              </header>
            </Card>
          ))}
        </List>
      </section>
    </DefaultLayout>
  )
}
