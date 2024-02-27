import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import SendMoneyCard from "../components/cards/SendMoneyCard";
import SendMoney from "../pages/user/SendMoney";
import UserHome from "../pages/user/UserHome";
import CashOut from "../pages/user/CashOut";
import UserCashIn from "../pages/agent/UserCashIn";
import AllUsers from "../pages/admin/AllUsers";
import UserTransactions from "../pages/admin/UserTransactions";

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
      {
        path: "user/cash-out",
        element: <CashOut />,
      },
      {
        path: "agent",
        element: <UserHome />,
      },
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "agent/balance",
        element: <UserCashIn />,
      },
      {
        path: "agent/cash-request",
        element: <UserCashIn />,
      },
      {
        path: "agent/user-cash-in",
        element: <UserCashIn />,
      },
      {
        path: "agent/transactions",
        element: <CashOut />,
      },
      {
        path: "admin",
        element: <UserHome />,
      },
      {
        path: "admin/all-users",
        element: <AllUsers />,
      },
      {
        path: "admin/transactions/:userId",
        element: <UserTransactions />,
      },
    ],
  },
]);

export default router;
