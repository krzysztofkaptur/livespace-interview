import { Link } from 'react-router-dom'

import DefaultLayout from '@/layouts/Default'
import List from '@/components/List'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import Avatar from '@/components/Avatar'

import { fetchVehicles } from '@/services/vehicles'
import { getIdFromUrl } from '@/utils/helpers'
import usePagination from '@/hooks/usePagination'
import useMyQuery from '@/hooks/useMyQuery'

export default function VehiclesPage() {
  const { currentPage } = usePagination()
  const { data: vehiclesRes } = useMyQuery({
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
        {vehiclesRes?.count ? <Pagination total={vehiclesRes?.count} /> : null}
      </section>
    </DefaultLayout>
  )
}
