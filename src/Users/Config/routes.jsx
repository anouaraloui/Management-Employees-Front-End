import ForgotPassword from '../Pages/Login/ForgotPassword';
import Dashboard from '../Pages/dashboard/index';
import Home from '../Pages/Login/Home'
import ResetPassword from '../Pages/Login/ResetPassword';
import Notification from '../Pages/Notification/Notification';


const routes = [
  {
    path: '/',
    element: Home,
    routeKey: 'home',
  },
  {
    path: '/dashboard/*',
    element: Dashboard,
    routeKey: 'dashboard'
  },
  {
    path: '/forgotPassword',
    element: ForgotPassword,
    routeKey: 'forgotPassword'
  },
  {
    path: '/auth/requestResetPassword/:id/:token',
    element: ResetPassword,
    routeKey: 'resetPassword'
  },
  {
    path: '/resetconfirm',
    element: Notification,
    routeKey: 'notificationreset'
  },
  {
    path: '/sendconfirm',
    element: Notification,
    routeKey: 'emailnotification'
  },
  // {
  //   path: '/users',
  //   element: Profile,
  //   routeKey: 'profile'
  // },
  // {
  //   path: '/users/:id',
  //   element: UserProfile,
  //   routeKey: 'userprofile'
  // },
  // {
  //   path: '/users/created',
  //   element: AddUser,
  //   routeKey: 'adduser'
  // }

]

export default routes