import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { authFetch } from '../../../global'

export const completeQuestionQuery = async (questionId: string) => {
  const { hostName, httpProtocol } = apiSettings
  let res

  if (hostName) {
    res = await authFetch(`${httpProtocol}://${hostName}${apiRoutes.completeQuestionHttpUrl}`, {
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
