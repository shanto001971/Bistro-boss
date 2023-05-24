import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Menu from "../components/MenuPage/Menu/Menu";
import Order from "../components/order/Order/Order";

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

    ]
  },
]);