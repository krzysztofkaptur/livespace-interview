import apiFetch from '@/plugins/apiFetch'

import { TVehicle, TVehiclesRes } from '@/types/vehicles'

export const fetchVehicles = ({
  page,
  signal
}: {
  page: number
  signal: AbortSignal
}): Promise<TVehiclesRes> =>
  apiFetch(`/vehicles?page=${page}`, {
    signal
  })

export const fetchVehicle = ({
  id,
  signal
}: {
  id: string
  signal: AbortSignal
}): Promise<TVehicle> =>
  apiFetch(`/vehicles/${id}`, {
    signal
  })
