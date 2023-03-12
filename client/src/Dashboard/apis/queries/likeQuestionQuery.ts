import { apiRoutes, apiSettings } from '../../../apiRoutes'
import { authFetch } from '../../../global'

interface Props {
  questionId?: string
  likes?: number
}

export const likeQuestionQuery = async ({ questionId, likes }: Props) => {
  const { hostName, httpsProtocol } = apiSettings
  let res

  if (hostName) {
    res = await authFetch(`${httpsProtocol}://${hostName}${apiRoutes.likeQuestionHttpUrl}`, {
      method: 'POST',
      body: JSON.stringify({ questionId, likes }),
    })
  } else {
    res = await authFetch(apiRoutes.likeQuestionHttpUrl, {
      method: 'POST',
      body: JSON.stringify({ questionId, likes }),
    })
  }

  return res.json()
}
