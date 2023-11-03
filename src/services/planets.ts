import apiFetch from '@/plugins/apiFetch'

import { TPlanet } from '@/types/planets'

export const fetchPlanet = (id: string): Promise<TPlanet> =>
  apiFetch(`/planets/${id}`)
