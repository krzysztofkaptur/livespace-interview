import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'

import { fetchCharacters } from '@/services/characters'

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: characters } = useQuery({
    queryKey: ['characters', currentPage],
    queryFn: () => fetchCharacters(currentPage)
  })

  return (
    <DefaultLayout>
      <section className="characters">
        <h1>Characters</h1>
        <List>
          {characters?.results?.map(character => (
            <Card key={character.name}>
              <img src="https://placehold.co/150x150" alt="" />
              <header>
                <h3>
                  <Link to={`/characters/1`}>{character.name}</Link>
                </h3>
              </header>
            </Card>
          ))}
        </List>
        {characters?.count ? (
          <Pagination
            total={characters?.count}
            currentPage={currentPage}
            handlePageChange={page => setCurrentPage(page)}
          />
        ) : null}
      </section>
    </DefaultLayout>
  )
}
