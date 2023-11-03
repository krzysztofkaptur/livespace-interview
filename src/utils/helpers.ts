// TODO - fix type
export const getIdFromUrl = (url: string) => {
  return url.split('/').at(-2)
}
