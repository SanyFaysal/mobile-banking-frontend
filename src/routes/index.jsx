import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import SendMoneyCard from "../components/cards/SendMoneyCard";
import SendMoney from "../pages/user/SendMoney";
import UserHome from "../pages/user/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home </div>,
  },
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Layout",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>Hi</div>,
      },
      {
        path: "user",
        element: <UserHome />,
      },
      {
        path: "user/send-money",
        element: <SendMoney />,
      },
    ],
  },
]);

export default router;
