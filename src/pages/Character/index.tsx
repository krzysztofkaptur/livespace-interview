import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import DefaultLayout from '@/layouts/Default'

import { fetchCharacter } from '@/services/characters'
import { fetchPlanet } from '@/services/planets'
import { getIdFromUrl } from '@/utils/helpers'
import { fetchSpecies } from '@/services/species'

export default function CharacterPage() {
  const { id } = useParams()

  const { data: character } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(id as string)
  })

  const { data: planet } = useQuery({
    queryKey: ['planet', id],
    queryFn: () => fetchPlanet(getIdFromUrl(character?.homeworld as string)),
    enabled: !!character?.homeworld
  })

  const { data: species } = useQuery({
    queryKey: ['species', id],
    queryFn: () => fetchSpecies(getIdFromUrl(character?.species[0] as string)),
    enabled: !!character?.species.length
  })

  return (
    <DefaultLayout>
      <section className="character">
        <article>
          <header>
            <img src="https://placehold.co/150x150" alt="" />
            <h1>{character?.name}</h1>
          </header>
          <p>
            <span>planet of origin:</span>
            {planet?.url ? (
              <Link to={`/planets/${getIdFromUrl(planet?.url as string)}`}>
                {planet?.name}
              </Link>
            ) : null}
          </p>
          <div>
            <span>vehicles:</span>
            <div>
              {character?.vehicles?.map(vehicle => (
                <div key={vehicle}>
                  <Link to={`/vehicles/${getIdFromUrl(vehicle)}`}>
                    {vehicle}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span>race:</span>
            {character?.species?.map(() => (
              <span>{species?.name}</span>
            ))}
          </div>
        </article>
      </section>
    </DefaultLayout>
  )
}
