import { FC } from 'react'

// import { useQuestionsQuery } from '../apis/hooks'

import { JournalView } from './Journal/JournalView'
import { JournalListView } from './Journal/JournalListView'

export const JournalContainer: FC = () => {
  // const { questions } = useQuestionsQuery()

  // return <JournalView />
  return <JournalListView />
}

JournalContainer.displayName = 'JournalContainer'
