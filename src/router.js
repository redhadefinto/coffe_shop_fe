import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../src/pages/Home/';
import Forgot from '../src/pages/Forgot/';
import Login from '../src/pages/Login/';
import SignUp from '../src/pages/SignUp/';
import Products from '../src/pages/Products/';
import App from '../src/pages/App/'
// import Profile from '../src/pages/'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/products", element: <Products /> },
  { path: "/app", element: <App name="Fazztrack" age={18} /> },
]);

export default router