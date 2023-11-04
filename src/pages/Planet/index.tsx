import { Link, useParams } from 'react-router-dom'

import Avatar from '@/components/Avatar'

import { fetchPlanet } from '@/services/planets'
import { getIdFromUrl } from '@/utils/helpers'
import useMyQuery from '@/hooks/useMyQuery'

export default function PlanetPage() {
  const { id } = useParams()

  const { data: planet } = useMyQuery({
    queryKey: ['planet', id],
    queryFn: () => fetchPlanet(id as string)
  })

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
            {planet?.residents?.map(resident => (
              <div key={resident}>
                <Link to={`/characters/${getIdFromUrl(resident)}`}>
                  {resident}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
