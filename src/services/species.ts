import apiFetch from '@/plugins/apiFetch'

import { TSpecies } from '@/types/species'

export const fetchSpecies = ({
  id,
  signal
}: {
  id: string
  signal: AbortSignal
}): Promise<TSpecies> =>
  apiFetch(`/species/${id}`, {
    signal
  })
