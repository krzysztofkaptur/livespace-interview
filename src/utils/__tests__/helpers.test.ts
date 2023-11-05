import { describe, it, expect } from 'vitest'

import { getIdFromUrl, pageCount } from '@/utils/helpers'

describe('getIdFromUrl', () => {
  it('should return id from url', () => {
    const id = '7'
    const url = `http://localhost:5173/characters/${id}/`
    expect(getIdFromUrl(url)).toBe(id)
  })
})

describe('pageCount', () => {
  it('should calculate pages count', () => {
    const total = 77
    expect(pageCount(total)).toBe(8)
  })
})
