import { ofetch } from 'ofetch'

const apiFetch = ofetch.create({ baseURL: 'https://swapi.dev/api/' })

export default apiFetch
