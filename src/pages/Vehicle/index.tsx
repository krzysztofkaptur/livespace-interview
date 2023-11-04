import { Link, useParams } from 'react-router-dom'

import Avatar from '@/components/Avatar'

import { fetchVehicle } from '@/services/vehicles'
import { getIdFromUrl } from '@/utils/helpers'
import useMyQuery from '@/hooks/useMyQuery'

export default function VehiclePage() {
  const { id } = useParams()

  const { data: vehicle } = useMyQuery({
    queryKey: ['vehicle', id],
    queryFn: () => fetchVehicle(id as string)
  })

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
            {vehicle?.pilots?.map(pilot => (
              <div>
                <Link to={`/characters/${getIdFromUrl(pilot)}`}>{pilot}</Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
