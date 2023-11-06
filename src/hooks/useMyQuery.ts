import { useState } from 'react'
import { useQuery, UseQueryOptions, useQueries } from '@tanstack/react-query'

// TODO - proper return type

type TMyQueryReturn<T> = {
  data: T
  isLoading: boolean
}

export const useMyQuery = (options: UseQueryOptions): TMyQueryReturn<any> => {
  const { data, isLoading } = useQuery(options)

  return {
    data,
    isLoading
  }
}

export const useMyQueries = ({
  query,
  queryName
}: {
  query: any
  queryName: string
}) => {
  const [ids, setIds] = useState([])

  const results = useQueries({
    queries: ids.map(id => ({
      queryKey: [queryName, id],
      queryFn: ({ signal }: { signal: AbortSignal }) => query({ id, signal }),
      enabled: !!ids.length
    })),
    combine: results => {
      return {
        data: results.map(result => result.data),
        pending: results.some(result => result.isPending)
      }
    }
  })

  return {
    data: results,
    setIds
  }
}
