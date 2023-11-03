import apiFetch from '@/plugins/apiFetch'

import { TVehiclesRes } from '@/types/vehicles'

export const fetchVehicles = (page: number): Promise<TVehiclesRes> =>
  apiFetch(`/vehicles?page=${page}`)
