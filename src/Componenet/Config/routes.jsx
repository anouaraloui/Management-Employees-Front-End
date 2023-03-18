import ForgotPassword from '../Pages/Login/ForgotPassword';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Login/Home'
import ResetPassword from '../Pages/Login/ResetPassword';
import Notification from '../Pages/Notification/Notification';



const routes =[
    {
      path:'/',
      element: Home ,
      routeKey: 'home'
    },
    {
      path:'/dashboard',
      element: Dashboard ,
      routeKey: 'dashboard'
    },
    {
      path:'/forgotPassword',
      element: ForgotPassword  ,
      routeKey: 'forgotPassword'
    },
    {
      path:'/auth/requestResetPassword/:id/:token',
      element:  ResetPassword ,
      routeKey: 'resetPassword'
    },
     {
      path:'/resetconfirm',
      element:  Notification  ,
      routeKey: 'notificationreset'
    },
     {
      path: '/sendconfirm' ,
      element:  Notification ,
      routeKey: 'emailnotification'
    }
  ]
  
  export default routes