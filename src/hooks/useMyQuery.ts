import { useQuery, UseQueryOptions } from '@tanstack/react-query'

// TODO - proper return type
export default function useMyQuery(options: UseQueryOptions) {
  const { data } = useQuery(options)

  return {
    data
  }
}
