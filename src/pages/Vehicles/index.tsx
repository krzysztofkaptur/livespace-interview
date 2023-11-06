import { Link } from 'react-router-dom'

import List from '@/components/List'
import Card from '@/components/Card'
import Avatar from '@/components/Avatar'
import Heading from '@/components/Heading'

import { fetchVehicles } from '@/services/vehicles'
import { getIdFromUrl } from '@/utils/helpers'
import usePagination from '@/hooks/usePagination'
import { useMyQuery } from '@/hooks/useMyQuery'

export default function VehiclesPage() {
  const { currentPage } = usePagination()
  const { data: vehiclesRes, isLoading } = useMyQuery({
    queryKey: ['vehicles', currentPage],
    queryFn: ({ signal }) => fetchVehicles({ page: currentPage, signal })
  })

  return (
    <section className="vehicles">
      <Heading level="h1">Vehicles</Heading>
      <List total={vehiclesRes?.count} isLoading={isLoading}>
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
    </section>
  )
}
