import { Link } from 'react-router-dom'

import List from '@/components/List'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import Avatar from '@/components/Avatar'

import { fetchPlanets } from '@/services/planets'
import { getIdFromUrl } from '@/utils/helpers'
import usePagination from '@/hooks/usePagination'
import useMyQuery from '@/hooks/useMyQuery'

export default function PlanetsPage() {
  const { currentPage } = usePagination()
  const { data: planetsRes } = useMyQuery({
    queryKey: ['characters', currentPage],
    queryFn: () => fetchPlanets(currentPage)
  })

  return (
    <section className="planets">
      <h1>planets</h1>
      <List>
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

      {planetsRes?.count ? <Pagination total={planetsRes?.count} /> : null}
    </section>
  )
}
