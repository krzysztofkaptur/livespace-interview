import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Sidebar from '@/components/Sidebar'

import { TRoute } from '@/types/general'

describe('Sidebar', () => {
  it('should render links', () => {
    const sampleRoutes: TRoute[] = [
      {
        to: '/',
        label: 'Something'
      }
    ]

    render(
      <BrowserRouter>
        <Sidebar routes={sampleRoutes} />
      </BrowserRouter>
    )

    sampleRoutes.forEach(route => screen.getByText(route.label))
  })
})
