import createHttpClient from './apiClient'

import type { AxiosInstance } from 'axios'

export default class CustomApiClient<T> {
  client: AxiosInstance
  methods: T

  constructor(mainHttpClient: AxiosInstance, methods: T) {
    this.client = mainHttpClient
    this.methods = methods
  }

  getUrl(): string | undefined {
    return this.client.getUri()
  }

  changeClient(url: string, rawMethods: T): void {
    this.client = createHttpClient(url)
    this.methods = rawMethods
  }
}
