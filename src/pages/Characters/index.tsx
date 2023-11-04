import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import Avatar from '@/components/Avatar'

import { fetchCharacters } from '@/services/characters'
import { getIdFromUrl } from '@/utils/helpers'

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: charactersRes } = useQuery({
    queryKey: ['characters', currentPage],
    queryFn: () => fetchCharacters(currentPage)
  })

  return (
    <DefaultLayout>
      <section className="characters">
        <h1>Characters</h1>
        <List>
          {charactersRes?.results
            ?.sort((character1, character2) =>
              character1.name > character2.name
                ? 1
                : character2.name > character1.name
                ? -1
                : 0
            )
            .map(character => {
              const id = getIdFromUrl(character.url)

              return (
                <Card key={character.name}>
                  <Avatar
                    src={`/images/characters/${id}.jpg`}
                    alt={character.name}
                  />
                  <header>
                    <h3>
                      <Link to={`/characters/${id}`}>{character.name}</Link>
                    </h3>
                  </header>
                </Card>
              )
            })}
        </List>
        {charactersRes?.count ? (
          <Pagination
            total={charactersRes?.count}
            currentPage={currentPage}
            handlePageChange={page => setCurrentPage(page)}
          />
        ) : null}
      </section>
    </DefaultLayout>
  )
}
