import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import List from '@/components/List'

describe('List', () => {
  it('should render children', () => {
    const sampleText = 'sample text'
    render(<List>{sampleText}</List>)

    expect(screen.getByText(sampleText)).toBeInTheDocument()
  })
})
