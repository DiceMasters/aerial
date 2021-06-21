import PApplication from './components/pages/PApplication'
import PLogin from './components/pages/PLogin'
import { APP_ROUTE, LOGIN_ROUTE } from './utils/consts'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: PLogin
  }
]

export const privateRoutes = [
  {
    path: APP_ROUTE,
    Component: PApplication
  }
]
