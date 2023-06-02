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
import AllUsers from "../components/MenuPage/Dashboard/MyCart/AllUsers/AllUsers";
import AddItem from "../components/MenuPage/Dashboard/AddItem/AddItem";
import AdminRouter from "../PrivetRoute/AdminRouter";
import ManageItems from "../components/MenuPage/Dashboard/ManageItems/ManageItems";
import Payment from "../components/MenuPage/Dashboard/Payment/Payment";

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
    element: <PrivetRoute><Dashboard /></PrivetRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart />
      },
      {
        path: 'payment',
        element: <Payment/>
      },
      {
        path: 'allUsers',
        element: <AdminRouter><AllUsers /></AdminRouter>
      },
      {
        path: 'addItem',
        element: <AdminRouter><AddItem /></AdminRouter>
      },
      {
        path: 'manageitems',
        element: <AdminRouter><ManageItems/></AdminRouter>
      },
      
    ]
  },
]);