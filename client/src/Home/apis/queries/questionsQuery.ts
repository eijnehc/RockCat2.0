import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { authFetch } from '../../../global'
import { QuestionsOverview } from '../../interfaces'

export const questionsQuery = async (email: string, questionId?: number): Promise<QuestionsOverview> => {
  const query = questionId ? `?id=${questionId}&email=${email}` : `?email=${email}`
  const { hostName, httpsProtocol } = apiSettings
  let res

  if (hostName) {
    res = await authFetch(`${httpsProtocol}://${hostName}${apiRoutes.questionsHttpUrl(query)}`)
  } else {
    res = await authFetch(apiRoutes.questionsHttpUrl(query))
  }

  return res.json()
}
