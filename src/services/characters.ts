import apiFetch from '@/plugins/apiFetch'

import { TCharactersRes } from '@/types/characters'

export const fetchCharacters = (page: number): Promise<TCharactersRes> =>
  apiFetch(`/people?page=${page}`)
