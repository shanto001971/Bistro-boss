import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Menu from "../components/MenuPage/Menu/Menu";
import Order from "../components/order/Order/Order";
import Login from "../components/MenuPage/login/Login";
import SingUp from "../components/MenuPage/singUp/SingUp";
import Secrets from "../components/secrets/Secrets";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../components/MenuPage/Dashboard/MyCart/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: 'order/:category',
        element: <Order />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'singup',
        element: <SingUp />
      },
      {
        path: '/secrets',
        element: <PrivetRoute>
          <Secrets />
        </PrivetRoute>
      },

    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path:'mycart',
        element: <MyCart/>
      }
    ]
  },
]);