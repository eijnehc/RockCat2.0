const httpsProtocol = 'https'
const hostName = window.location.hostname === 'localhost' ? '' : 'apis.rockcat.dev'

export const apiSettings = {
  httpsProtocol,
  hostName,
}

export const apiRoutes = {
  createCheckoutSessionHttpUrl: `/api/v1/create-checkout-session`,
  signUpHttpUrl: (sessionId: string) => `/api/v1/sign-up?session_id=${sessionId}`,
  signInHttpUrl: (email: string) => `/api/v1/sign-in?email=${email}`,
  questionsHttpUrl: (query: string) => `/api/v1/questions${query}`,
  completeQuestionHttpUrl: '/api/v1/complete-question',
  likeQuestionHttpUrl: '/api/v1/question/like',
  userHttpUrl: (email: string) => `/api/v1/user?email=${email}`,
  updateUserHttpUrl: '/api/v1/update-user',
  updateAvatarHttpUrl: '/api/v1/update-avatar',
}
