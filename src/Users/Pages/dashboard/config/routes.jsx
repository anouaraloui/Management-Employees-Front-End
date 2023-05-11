


import AddUser from '../../../Register/Register';
import NotFound from '../../NotFound';
import Profile from '../../Profile/Pages/Profile';
import UserProfile from '../../Profile/Pages/UserProfile'


export const routesAdmin =[
     {
      path: '/users' ,
      element:  Profile ,
      routeKey: 'profile'
    },
     {
      path: '/users/:id' ,
      element:  UserProfile ,
      routeKey: 'userprofile'
    },
    {
      path: '/users/created' ,
      element:  AddUser ,
      routeKey: 'adduser'
    }
    
  ]
  
 export const routesUser =[
    
    {
     path: '/users/:id' ,
     element:  UserProfile ,
     routeKey: 'userprofile'
   },
   {
     path: '/users/created' ,
     element:  NotFound ,
     routeKey: 'adduser'
   }
   
 ]
 
