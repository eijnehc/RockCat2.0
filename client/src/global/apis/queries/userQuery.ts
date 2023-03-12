import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { User } from '../../interfaces'
import { authFetch } from '../../utils'

export const userQuery = async (email: string): Promise<User> => {
  const { hostName, httpsProtocol } = apiSettings
  let res

  if (hostName) {
    res = await authFetch(`${httpsProtocol}://${hostName}${apiRoutes.userHttpUrl(email)}`)
  } else {
    res = await authFetch(apiRoutes.userHttpUrl(email))
  }

  return res.json()
}
