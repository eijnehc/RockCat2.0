import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { authFetch } from '../../../global'
import { QuestionsOverview } from '../../interfaces'

export const questionsQuery = async (questionId?: number): Promise<QuestionsOverview> => {
  const query = questionId ? `?id=${questionId}` : ''
  const { hostName, httpsProtocol } = apiSettings
  let res

  if (hostName) {
    res = await fetch(`${httpsProtocol}://${hostName}${apiRoutes.questionsHttpUrl(query)}`)
  } else {
    res = await authFetch(apiRoutes.questionsHttpUrl(query))
  }

  return res.json()
}
