import apiFetch from '@/plugins/apiFetch'

import { TCharactersRes, TCharacter } from '@/types/characters'

export const fetchCharacters = ({
  page,
  signal
}: {
  page: number
  signal: AbortSignal
}): Promise<TCharactersRes> =>
  apiFetch(`/people?page=${page}`, {
    signal
  })

export const fetchCharacter = ({
  id,
  signal
}: {
  id: string
  signal: AbortSignal
}): Promise<TCharacter> =>
  apiFetch(`/people/${id}`, {
    signal
  })
