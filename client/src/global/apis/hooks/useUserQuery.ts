import { useQuery, UseQueryResult } from 'react-query'

import { User } from '../../interfaces'
import { getTokenFromStorage } from '../../utils'
import { userQuery } from '../queries'

export const useUserQuery = () => {
  const auth = getTokenFromStorage()

  const { data, isLoading, error, refetch }: UseQueryResult<User> = useQuery([auth], () =>
    userQuery(auth.email)
  )

  return { user: data, refetch, isLoading, error }
}
