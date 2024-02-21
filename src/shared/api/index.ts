import createHttpClient from './apiClient'
import { PollApi } from './polls'

const httpClient = createHttpClient("http://localhost:2040")

export const pollApi = new PollApi(httpClient)

export { default as CustomApiClient } from './CustomApiClient'

