import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesAdmin, routesDirMan, routesUser, } from '../config/routes';
import NotFound from '../../../Pages/NotFound';
import jwtDecode from 'jwt-decode';

function DashboardContent() {
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const RoleUser = decodedToken.role;
  return (
    <>
      {RoleUser === 'Super Admin' ?
        <Routes>
          {
            routesAdmin.map(({ element: Element, path, routeKey }) =>
              <Route key={routeKey} element={<Element />} path={path} />)
          }
          <Route element={<NotFound />} path="*" />
        </Routes>
        :
        RoleUser === "Director" || RoleUser === "Team Manager" ?
        <Routes>
          {
            routesDirMan.map(({ element: Element, path, routeKey }) =>
              <Route key={routeKey} element={<Element />} path={path} />)
          }
          <Route element={<NotFound />} path="*" />
        </Routes> : 
        <Routes>
          {
            routesUser.map(({ element: Element, path, routeKey }) =>
              <Route key={routeKey} element={<Element />} path={path} />)
          }
          <Route element={<NotFound />} path="*" />
        </Routes>
      }
    </>
  );
}

export default DashboardContent;
