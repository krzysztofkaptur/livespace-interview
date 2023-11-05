import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Avatar from '@/components/Avatar'

import { fetchPlanet } from '@/services/planets'
import { getIdFromUrl } from '@/utils/helpers'
import { useMyQuery, useMyQueries } from '@/hooks/useMyQuery'
import { fetchCharacter } from '@/services/characters'

export default function PlanetPage() {
  const { id } = useParams()

  const { data: planet } = useMyQuery({
    queryKey: ['planet', id],
    queryFn: ({ signal }) => fetchPlanet({ id: id as string, signal })
  })

  const { data: charactersData, setIds: setCharactersIds } = useMyQueries({
    query: fetchCharacter,
    queryName: 'residents'
  })

  useEffect(() => {
    if (planet?.residents) {
      setCharactersIds(
        planet?.residents.map(resident => getIdFromUrl(resident))
      )
    }
  }, [planet, setCharactersIds])

  return (
    <section className="planet">
      <article>
        <header>
          <Avatar src={`/images/planets/${id}.jpg`} alt={planet?.name} />
          <h1>{planet?.name}</h1>
        </header>
        <p>population count: {planet?.population}</p>
        <div>
          <span>characters connected:</span>
          <div>
            {charactersData?.data?.map(character => (
              <div key={character}>
                <Link
                  to={`/characters/${character?.url &&
                    getIdFromUrl(character?.url as string)}`}
                >
                  {character?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
