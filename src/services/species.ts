import apiFetch from '@/plugins/apiFetch'

import { TSpecies } from '@/types/species'

export const fetchSpecies = (id: string): Promise<TSpecies> =>
  apiFetch(`/species/${id}`)
