import apiFetch from '@/plugins/apiFetch'

import { TCharactersRes } from '@/types/characters'

export const fetchCharacters = (): Promise<TCharactersRes> =>
  apiFetch('/people')
