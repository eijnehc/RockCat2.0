import { useQuery, UseQueryResult } from 'react-query'

import { getTokenFromStorage } from '../../../global'
import { QuestionsOverview } from '../../interfaces'
import { questionsQuery } from '../queries'

export const useQuestionsQuery = (questionId?: number) => {
  const auth = getTokenFromStorage()
  const {
    data: questions,
    refetch,
    isLoading,
    error,
  }: UseQueryResult<QuestionsOverview> = useQuery([auth.email, questionId], () =>
    questionsQuery(auth.email, questionId)
  )

  return { questions, refetch, isLoading, error }
}
