import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import Avatar from '@/components/Avatar'

import { fetchCharacter } from '@/services/characters'
import { fetchPlanet } from '@/services/planets'
import { getIdFromUrl } from '@/utils/helpers'
import { fetchSpecies } from '@/services/species'
import { fetchVehicle } from '@/services/vehicles'
import { useMyQuery, useMyQueries } from '@/hooks/useMyQuery'

export default function CharacterPage() {
  const { id } = useParams()

  const { data: character } = useMyQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(id as string)
  })

  const { data: planet } = useMyQuery({
    queryKey: ['planet', id],
    queryFn: () => fetchPlanet(getIdFromUrl(character?.homeworld as string)),
    enabled: !!character?.homeworld
  })

  const { data: species } = useMyQuery({
    queryKey: ['species', id],
    queryFn: () => fetchSpecies(getIdFromUrl(character?.species[0] as string)),
    enabled: !!character?.species.length
  })

  const { data: vehiclesData, setIds: setVehiclesIds } = useMyQueries({
    query: fetchVehicle,
    queryName: 'characterVehicles'
  })

  useEffect(() => {
    if (character?.vehicles) {
      setVehiclesIds(character?.vehicles.map(vehicle => getIdFromUrl(vehicle)))
    }
  }, [character, setVehiclesIds])

  return (
    <section className="character">
      <article>
        <header>
          <Avatar src={`/images/characters/${id}.jpg`} alt={character?.name} />
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
            {vehiclesData?.data?.map(vehicle => (
              <div key={vehicle}>
                <Link
                  to={`/vehicles/${vehicle?.url &&
                    getIdFromUrl(vehicle?.url as string)}`}
                >
                  {vehicle?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span>race:</span>
          {character?.species?.map(() => (
            <span key={species?.name}>{species?.name}</span>
          ))}
        </div>
      </article>
    </section>
  )
}
