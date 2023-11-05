import { Link } from 'react-router-dom'

import List from '@/components/List'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import Avatar from '@/components/Avatar'

import { fetchCharacters } from '@/services/characters'
import { getIdFromUrl } from '@/utils/helpers'
import usePagination from '@/hooks/usePagination'
import { useMyQuery } from '@/hooks/useMyQuery'

export default function HomePage() {
  const { currentPage } = usePagination()

  const { data: charactersRes } = useMyQuery({
    queryKey: ['characters', currentPage],
    queryFn: ({ signal }) => fetchCharacters({ page: currentPage, signal })
  })

  return (
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
        <Pagination total={charactersRes?.count} />
      ) : null}
    </section>
  )
}
