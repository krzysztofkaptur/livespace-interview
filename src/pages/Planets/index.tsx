import { Link } from 'react-router-dom'

import List from '@/components/List'
import Card from '@/components/Card'
import Avatar from '@/components/Avatar'
import Heading from '@/components/Heading'

import { fetchPlanets } from '@/services/planets'
import { getIdFromUrl } from '@/utils/helpers'
import usePagination from '@/hooks/usePagination'
import { useMyQuery } from '@/hooks/useMyQuery'

export default function PlanetsPage() {
  const { currentPage } = usePagination()
  const { data: planetsRes, isLoading } = useMyQuery({
    queryKey: ['planets', currentPage],
    queryFn: ({ signal }) => fetchPlanets({ page: currentPage, signal })
  })

  return (
    <section className="planets">
      <Heading level="h1">Planets</Heading>
      <List total={planetsRes?.count} isLoading={isLoading}>
        {planetsRes?.results?.map(planet => {
          const id = getIdFromUrl(planet.url)

          return (
            <Card key={planet.name}>
              <Avatar src={`/images/planets/${id}.jpg`} alt={planet.name} />

              <header>
                <h3>
                  <Link to={`/planets/${id}`}>{planet.name}</Link>
                </h3>
              </header>
            </Card>
          )
        })}
      </List>
    </section>
  )
}
