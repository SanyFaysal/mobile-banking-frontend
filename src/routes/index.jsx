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
import MyTransactions from "../pages/shared/MyTransactions";
import CheckRole from "../auth/CheckRole";
import AgentHome from "../pages/agent/AgentHome";
import AdminHome from "../pages/admin/AdminHome";
import NotFound from "../pages/shared/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: (
      <PrivateRoute>
        <CheckRole role={"user"}>
          <Layout />
        </CheckRole>
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
      {
        path: "my-transactions",
        element: <MyTransactions />,
      },
    ],
  },
  {
    path: "/agent",
    element: (
      <PrivateRoute>
        <CheckRole role={"agent"}>
          <Layout />
        </CheckRole>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <AgentHome />,
      },

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
      {
        path: "cash-request",
        element: <CashRequest />,
      },
      {
        path: "withdraw-request",
        element: <WithdrawMoney />,
      },
      {
        path: "my-transactions",
        element: <MyTransactions />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <CheckRole role={"admin"}>
          <Layout />
        </CheckRole>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminHome />,
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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
