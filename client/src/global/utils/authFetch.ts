import { getTokenFromStorage } from './getTokenFromStorage'

export const authFetch = async (input: RequestInfo, init?: RequestInit, isImage?: boolean) => {
  const auth = getTokenFromStorage()
  const options: RequestInit = init ?? {}
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${auth.accessToken}`,
  }

  if (isImage) {
    delete defaultHeaders['Content-Type']
  }

  options.headers = defaultHeaders

  const response = await fetch(input, options)

  return response
}
