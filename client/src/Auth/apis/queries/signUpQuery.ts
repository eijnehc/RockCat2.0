import { apiRoutes, apiSettings } from '../../../apiRoutes'

export const signUpQuery = async (sessionId: string) => {
  const { hostName, httpsProtocol } = apiSettings
  let res

  if (hostName) {
    res = await fetch(`${httpsProtocol}://${hostName}${apiRoutes.signUpHttpUrl(sessionId)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId }),
    })
  } else {
    res = await fetch(apiRoutes.signUpHttpUrl(sessionId), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId }),
    })
  }

  return res
}
