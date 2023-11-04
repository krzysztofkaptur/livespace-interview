import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import Avatar from '@/components/Avatar'

import { fetchVehicle } from '@/services/vehicles'
import { getIdFromUrl } from '@/utils/helpers'

export default function VehiclePage() {
  const { id } = useParams()

  const { data: vehicle } = useQuery({
    queryKey: ['planet', id],
    queryFn: () => fetchVehicle(id as string)
  })

  return (
    <DefaultLayout>
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
    </DefaultLayout>
  )
}
