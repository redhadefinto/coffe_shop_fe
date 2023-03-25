import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home/';
import Forgot from './pages/Forgot/';
import Login from './pages/Login/';
import SignUp from './pages/SignUp/';
import Products from './pages/Products/';
import App from './pages/App/'
import ProductDetail from './pages/ProductDetail'
import History from './pages/History';
import Payment from './pages/Payments';
import Profile from '../src/pages/Profile'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/products", element: <Products /> },
  { path: "/app", element: <App name="Fazztrack" age={18} /> },
  { path: "/details", element: <ProductDetail /> },
  { path: "/history", element: <History /> },
  { path: "/payments", element: <Payment />},
  { path: "/profile", element: <Profile />}
]);

export default router