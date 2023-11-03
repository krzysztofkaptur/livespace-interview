import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import Avatar from '@/components/Avatar'

import { fetchVehicles } from '@/services/vehicles'
import { getIdFromUrl } from '@/utils/helpers'

export default function VehiclesPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data: vehiclesRes } = useQuery({
    queryKey: ['characters', currentPage],
    queryFn: () => fetchVehicles(currentPage)
  })

  return (
    <DefaultLayout>
      <section className="vehicles">
        <h1>vehicles</h1>
        <List>
          {vehiclesRes?.results?.map(vehicle => {
            const id = getIdFromUrl(vehicle.url)

            return (
              <Card key={vehicle.name}>
                <Avatar src={`/images/vehicles/${id}.jpg`} alt={vehicle.name} />
                <header>
                  <h3>
                    <Link to={`/vehicles/${id}`}>{vehicle.name}</Link>
                  </h3>
                </header>
              </Card>
            )
          })}
        </List>
        {vehiclesRes?.count ? (
          <Pagination
            total={vehiclesRes?.count}
            currentPage={currentPage}
            handlePageChange={page => setCurrentPage(page)}
          />
        ) : null}
      </section>
    </DefaultLayout>
  )
}
