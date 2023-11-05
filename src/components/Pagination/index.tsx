import ReactPaginate from 'react-paginate'

import usePagination from '@/hooks/usePagination'
import { pageCount as countPages } from '@/utils/helpers'

type TProps = {
  total: number
}

export default function Pagination(props: TProps) {
  const { currentPage, setSearchParams } = usePagination()

  const { total = 0 } = props

  const pageCount = countPages(total)

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
      pageRangeDisplayed={3}
    />
  )
}
