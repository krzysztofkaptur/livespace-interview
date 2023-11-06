import apiFetch from '@/plugins/apiFetch'

import { TPlanet, TPlanetsRes } from '@/types/planets'

export const fetchPlanets = ({
  page,
  signal
}: {
  page: number
  signal: AbortSignal
}): Promise<TPlanetsRes> =>
  apiFetch(`/planets?page=${page}`, {
    signal: signal
  })

export const fetchPlanet = ({
  id,
  signal
}: {
  id: string
  signal: AbortSignal
}): Promise<TPlanet> =>
  apiFetch(`/planets/${id}`, {
    signal
  })
