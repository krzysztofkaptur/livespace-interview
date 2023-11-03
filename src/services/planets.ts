import apiFetch from '@/plugins/apiFetch'

import { TPlanet, TPlanetsRes } from '@/types/planets'

export const fetchPlanets = (page: number): Promise<TPlanetsRes> =>
  apiFetch(`/planets?page=${page}`)

export const fetchPlanet = (id: string): Promise<TPlanet> =>
  apiFetch(`/planets/${id}`)
