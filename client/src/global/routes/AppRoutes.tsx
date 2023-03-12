import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const DashboardPage = lazy(() => import('../../Dashboard/pages/DashboardPage'))
const HomePage = lazy(() => import('../../Home/pages/HomePage'))
const LoginPage = lazy(() => import('../../Auth/pages/LoginPage'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const ProfilePage = lazy(() => import('../../Profile/pages/ProfilePage'))
const WelcomePage = lazy(() => import('../../Welcome/pages/WelcomePage'))
const JournalPage = lazy(() => import('../../Journal/pages/JournalPage'))
const JournalRouter = lazy(() => import('../../Journal/JournalRouter'))

export const router = createBrowserRouter([
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'dashboard/:questionId',
    element: <DashboardPage />,
  },
  {
    path: 'profile',
    element: <ProfilePage />,
  },
  {
    // path: 'journal/*',
    // element: <JournalRouter />,
    path: 'journal',
    element: <JournalPage />,
    // loader: useRouteLoaderData,
    children: [
      {
        path: 'journal/new',
        element: <JournalPage />,
      },
      {
        path: 'journal/:journalId',
        element: <JournalPage />,
      },
    ]
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
