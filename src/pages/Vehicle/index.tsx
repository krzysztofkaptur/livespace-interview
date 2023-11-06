import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Avatar from '@/components/Avatar'

import { fetchVehicle } from '@/services/vehicles'
import { getIdFromUrl } from '@/utils/helpers'
import { useMyQuery, useMyQueries } from '@/hooks/useMyQuery'
import { fetchCharacter } from '@/services/characters'

export default function VehiclePage() {
  const { id } = useParams()

  const { data: vehicle } = useMyQuery({
    queryKey: ['vehicle', id],
    queryFn: ({ signal }) => fetchVehicle({ id: id as string, signal })
  })

  const { data: pilotsData, setIds: setPilotsIds } = useMyQueries({
    query: fetchCharacter,
    queryName: 'pilots'
  })

  useEffect(() => {
    if (vehicle?.pilots) {
      setPilotsIds(vehicle?.pilots.map(pilot => getIdFromUrl(pilot)))
    }
  }, [vehicle, setPilotsIds])

  return (
    <section className="vehicle">
      <article>
        <header>
          <Avatar src={`/images/vehicles/${id}.jpg`} alt={vehicle?.name} />
          <h1>{vehicle?.name}</h1>
        </header>
        <p>type: {vehicle?.model}</p>
        <div>
          <span>characters connected</span>
          <div>
            {pilotsData?.data?.map(pilot => (
              <div key={pilot}>
                <Link
                  to={`/characters/${pilot?.url &&
                    getIdFromUrl(pilot?.url as string)}`}
                >
                  {pilot?.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
