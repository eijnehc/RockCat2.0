import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { authFetch } from '../../../global'

export const updateAvatarQuery = async (formData: FormData) => {
  const { hostName, httpProtocol } = apiSettings
  let res

  if (hostName) {
    res = await authFetch(`${httpProtocol}://${hostName}${apiRoutes.updateAvatarHttpUrl}`, {
      method: 'POST',
      body: formData,
    })
  } else {
    res = await authFetch(
      apiRoutes.updateAvatarHttpUrl,
      {
        method: 'POST',
        body: formData,
      },
      true
    )
  }

  return res.json()
}
