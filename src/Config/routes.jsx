import ForgotPassword from '../Pages/ForgotPassword/index';
import Home from '../Pages/Home/index'
import ResetPassword from '../Pages/ResetPassword/index';
import Notification from '../Pages/Notification/Notification';
import LayoutApp from '../Component/Layout/LayoutApp';

const routes = [
  {
    path: '/',
    element: Home,
    routeKey: 'home',
  },
  {
    path: '/dashboard/*',
    element: LayoutApp,
    routeKey: 'layoutApp'
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
  }

];

export default routes;