import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import DefaultLayout from '@/layouts/Default'
import Avatar from '@/components/Avatar'

import { fetchPlanet } from '@/services/planets'
import { getIdFromUrl } from '@/utils/helpers'

export default function PlanetPage() {
  const { id } = useParams()

  const { data: planet } = useQuery({
    queryKey: ['planet', id],
    queryFn: () => fetchPlanet(id as string)
  })

  return (
    <DefaultLayout>
      <section className="planet">
        <article>
          <header>
            <Avatar src={`/images/planets/${id}.jpg`} alt={planet?.name} />
            <h1>{planet?.name}</h1>
          </header>
          <p>population count: {planet?.population}</p>
          <p>
            <span>characters connected:</span>
            <div>
              {planet?.residents?.map(resident => (
                <div>
                  <Link to={`/characters/${getIdFromUrl(resident)}`}>
                    {resident}
                  </Link>
                </div>
              ))}
            </div>
          </p>
        </article>
      </section>
    </DefaultLayout>
  )
}
