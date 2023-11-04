import ReactPaginate from 'react-paginate'

import usePagination from '@/hooks/usePagination'

type TProps = {
  total: number
}

export default function Pagination(props: TProps) {
  const { currentPage, setSearchParams } = usePagination()

  const { total = 0 } = props

  const pageCount = Math.ceil(total / 10)

  const handlePageClick = ({ selected }: { selected: number }) => {
    setSearchParams({ page: `${selected + 1}` })
  }

  return (
    <ReactPaginate
      className="pagination"
      pageCount={pageCount}
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
      onPageChange={handlePageClick}
    />
  )
}
