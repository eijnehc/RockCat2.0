import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { authFetch } from '../../../global'

export const completeQuestionQuery = async (questionId: string) => {
  const { hostName, httpsProtocol } = apiSettings
  let res

  if (hostName) {
    res = await authFetch(`${httpsProtocol}://${hostName}${apiRoutes.completeQuestionHttpUrl}`, {
      method: 'POST',
      body: JSON.stringify({ questionId: questionId }),
    })
  } else {
    res = await authFetch(apiRoutes.completeQuestionHttpUrl, {
      method: 'POST',
      body: JSON.stringify({ questionId: questionId }),
    })
  }

  return res.json()
}
