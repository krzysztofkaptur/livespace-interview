import { useSearchParams } from 'react-router-dom'

export default function usePagination() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = searchParams.get('page') ? +searchParams.get('page')! : 1

  return {
    currentPage,
    setSearchParams
  }
}
