
import NotFound from '../../../Pages/NotFound';
import Profile from '../../../Pages/Profile/AllUsers/Profile';
import UserProfile from '../../../Pages/Profile/UserProfile/UserProfile';
import AddUser from '../../../Pages/Register/Register';
import AddDaysOff from '../../daysOff/AddDayOff/index';
import UserDaysOff from '../../../Pages/DaysOff/UserRequest/index'
import AllDaysOff from '../../../Pages/DaysOff/AllRequest/index'
import Dashboard from '../../Dashboard';


export const routesAdmin =[
  {
    path: '/' ,
    element:  Dashboard ,
    routeKey: 'dashboard'
  },
     {
      path: '/users' ,
      element:  Profile ,
      routeKey: 'profile'
    },
     {
      path: '/users/profile/:id' ,
      element:  UserProfile ,
      routeKey: 'userprofile'
    },
    {
      path: '/users/created' ,
      element:  AddUser ,
      routeKey: 'adduser'
    },
    {
      path: '/listDays' ,
      element:  AllDaysOff ,
      routeKey: 'alldaysoff'
    },
    {
      path: '/newDaysOff' ,
      element:  AddDaysOff ,
      routeKey: 'adddaysoff'
    },
    {
      path: '/dayoffUser/:id' ,
      element:  UserDaysOff ,
      routeKey: 'dayoff'
    },
    
    
  ]
  
 export const routesUser =[
    
    {
     path: '/users/profile/:id' ,
     element:  UserProfile ,
     routeKey: 'userprofile'
   },
   {
     path: '/users/created' ,
     element:  NotFound ,
     routeKey: 'adduser'
   },
   {
     path: '/dayoffUser/:id' ,
     element:  UserDaysOff ,
     routeKey: 'dayoff'
   },
   {
     path: '/newDaysOff' ,
     element:  AddDaysOff ,
     routeKey: 'adddaysoff'
   },
    {
      path: '/listDays' ,
      element:  AllDaysOff ,
      routeKey: 'alldaysoff'
    },
   
 ]
 
