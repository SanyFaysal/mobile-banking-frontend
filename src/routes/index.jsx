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
import WithdrawMoney from "../pages/agent/WIthdrawMoney";
import AllWithdrawRequest from "../pages/admin/AllWithdrawRequest";
import Login from "../pages/Login";
import PrivateRoute from "../auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/user",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UserHome />,
      },

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
    path: "/agent",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UserHome />,
      },

      {
        path: "agent",
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
        path: "agent/withdraw-request",
        element: <WithdrawMoney />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "agent-request",
        element: <AllAgentRequest />,
      },
      {
        path: "cash-request",
        element: <AllCashRequest />,
      },
      {
        path: "withdraw-request",
        element: <AllWithdrawRequest />,
      },
      {
        path: "transactions/users",
        element: <AllUserTransactions />,
      },
      {
        path: "transactions/agents",
        element: <AllAgentTransactions />,
      },
      {
        path: "transactions/:userId",
        element: <UserTransactions />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
