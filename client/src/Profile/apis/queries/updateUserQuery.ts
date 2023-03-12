import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { authFetch } from '../../../global'
import { User } from '../../../global/interfaces'

export const updateUserQuery = async (user: User) => {
  const { hostName, httpProtocol } = apiSettings
  let res

  if (hostName) {
    res = await authFetch(`${httpProtocol}://${hostName}${apiRoutes.updateUserHttpUrl}`, {
      method: 'POST',
      body: JSON.stringify(user),
    })
  } else {
    res = await authFetch(apiRoutes.updateUserHttpUrl, {
      method: 'POST',
      body: JSON.stringify(user),
    })
  }

  return res.json()
}
