import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import Avatar from '@/components/Avatar'

import { fetchPlanets } from '@/services/planets'
import { getIdFromUrl } from '@/utils/helpers'

export default function PlanetsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: planetsRes } = useQuery({
    queryKey: ['characters', currentPage],
    queryFn: () => fetchPlanets(currentPage)
  })

  return (
    <DefaultLayout>
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

        {planetsRes?.count ? (
          <Pagination
            total={planetsRes?.count}
            currentPage={currentPage}
            handlePageChange={page => setCurrentPage(page)}
          />
        ) : null}
      </section>
    </DefaultLayout>
  )
}
