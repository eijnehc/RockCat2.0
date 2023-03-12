import { FC } from 'react'

import { PrivateLayout } from '../../global'
import { JournalContainer } from '../components'

const JournalPage: FC = () => (
  <PrivateLayout>
    <JournalContainer />
  </PrivateLayout>
)

JournalPage.displayName = 'JournalPage'

export default JournalPage
