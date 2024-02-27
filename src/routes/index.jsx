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
import Transactions from "../pages/admin/AllUserTransactions";
import AllUserTransactions from "../pages/admin/AllUserTransactions";
import AllAgentTransactions from "../pages/admin/AllAgentTransactions";
import AllAgentRequest from "../pages/admin/AgentRequest";
import CashRequest from "../pages/agent/CashRequest";
import AllCashRequest from "../pages/admin/AllCashRequest";

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
        path: "agent/user-cash-in",
        element: <UserCashIn />,
      },
      {
        path: "agent/transactions",
        element: <CashOut />,
      },
      {
        path: "agent/cash-request",
        element: <CashRequest />,
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
        path: "admin/agent-request",
        element: <AllAgentRequest />,
      },
      {
        path: "admin/cash-request",
        element: <AllCashRequest />,
      },
      {
        path: "admin/transactions/users",
        element: <AllUserTransactions />,
      },
      {
        path: "admin/transactions/agents",
        element: <AllAgentTransactions />,
      },
      {
        path: "admin/transactions/:userId",
        element: <UserTransactions />,
      },
    ],
  },
]);

export default router;
