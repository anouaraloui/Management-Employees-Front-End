import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './Componenet/Config/routes';
import NotFound from './Componenet/Pages/NotFound/index';


function App() {
  return (


    <Routes>
      {
        routes.map(({element: Element, path, routeKey}) => <Route key={routeKey} element={<Element />} path={path} />)
      }
      <Route element={<NotFound />} path="*" />
    </Routes>

      

  );
}

export default App;
