import apiFetch from '@/plugins/apiFetch'

import { TCharactersRes, TCharacter } from '@/types/characters'

export const fetchCharacters = (page: number): Promise<TCharactersRes> =>
  apiFetch(`/people?page=${page}`)

export const fetchCharacter = (id: string): Promise<TCharacter> =>
  apiFetch(`/people/${id}`)
