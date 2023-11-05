import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Pagination from '@/components/Pagination'

describe('Pagination', () => {
  it('should be visible', () => {
    const total = 55

    render(
      <BrowserRouter>
        <Pagination total={total} />
      </BrowserRouter>
    )

    expect(screen.getByRole('navigation')).toBeVisible()
  })

  it('should not be in the document', () => {
    const total = 0

    render(
      <BrowserRouter>
        <Pagination total={total} />
      </BrowserRouter>
    )

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })
})
