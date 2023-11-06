import { perPage } from '@/config/default'

export const getIdFromUrl = (url: string) => {
  return url.split('/')[url.split('/').length - 2]
}

export const pageCount = (items: number) => Math.ceil(items / perPage)
