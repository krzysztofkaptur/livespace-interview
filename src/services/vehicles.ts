import apiFetch from '@/plugins/apiFetch'

import { TVehicle, TVehiclesRes } from '@/types/vehicles'

export const fetchVehicles = (page: number): Promise<TVehiclesRes> =>
  apiFetch(`/vehicles?page=${page}`)

export const fetchVehicle = (id: string): Promise<TVehicle> =>
  apiFetch(`/vehicles/${id}`)
