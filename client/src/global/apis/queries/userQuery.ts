import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { User } from '../../interfaces'
import { authFetch } from '../../utils'

export const userQuery = async (): Promise<User> => {
  const { hostName, httpProtocol } = apiSettings
  let res

  if (hostName) {
    res = await fetch(`${httpProtocol}://${hostName}${apiRoutes.userHttpUrl}`)
  } else {
    res = await authFetch(apiRoutes.userHttpUrl)
  }

  return res.json()
}
