import ReactPaginate from 'react-paginate'

type TProps = {
  total: number
  currentPage: number
  handlePageChange: (page: number) => void
}

export default function Pagination(props: TProps) {
  const { total = 0, handlePageChange, currentPage } = props

  const pageCount = Math.ceil(total / 10)

  const handlePageClick = ({ selected }: { selected: number }) => {
    handlePageChange(selected + 1)
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
