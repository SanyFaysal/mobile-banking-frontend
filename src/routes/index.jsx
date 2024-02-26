import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import SendMoneyCard from "../components/cards/SendMoneyCard";
import SendMoney from "../pages/user/SendMoney";
import UserHome from "../pages/user/UserHome";
import CashOut from "../pages/user/CashOut";
import UserCashIn from "../pages/agent/UserCashIn";

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
        children: [
          {
            path: "send-money",
            element: <SendMoney />,
          },
          {
            path: "cash-out",
            element: <CashOut />,
          },
        ],
      },
      {
        path: "agent",
        element: <UserHome />,
        children: [
          {
            path: "balance",
            element: <UserCashIn />,
          },
          {
            path: "user-cash-in",
            element: <UserCashIn />,
          },
          {
            path: "transactions",
            element: <CashOut />,
          },
        ],
      },
    ],
  },
]);

export default router;
