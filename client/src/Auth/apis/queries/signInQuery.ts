import { apiRoutes, apiSettings } from '../../../apiRoutes'

export const signInQuery = async (email: string) => {
  const { hostName, httpProtocol } = apiSettings
  let res

  if (hostName) {
    res = await fetch(`${httpProtocol}://${hostName}${apiRoutes.signInHttpUrl(email)}`)
  } else {
    res = await fetch(apiRoutes.signInHttpUrl(email))
  }

  return res
}
