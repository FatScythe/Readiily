// Pages
import Homepage from "./pages/HomePage";
import Auth from "./pages/Auth";
import Portal from "./pages/Portal";
import ForgotPwd from "./pages/Auth/forgotPassword";
import ResetPwd from "./pages/Auth/resetPassword";
import GoogleRedirect from "./pages/Auth/google";
import Dashboard from "./pages/Dashboard";
import HomeDash from "./pages/Dashboard/pages/all";
import SingleTicket from "./pages/Dashboard/pages/all/SingleTicket";
import VerifyPayment from "./pages/payment/VerifyPayment";
import NotFound from "./pages/notFound";
// Router
import { createBrowserRouter, Navigate } from "react-router-dom";
// User pages
import Overview from "./pages/Dashboard/pages/user/home";
import Account from "./pages/Dashboard/pages/user/account";
import Ideate from "./pages/Dashboard/pages/user/ideate";
import Calendar from "./pages/Dashboard/pages/user/calendar";
// User SubPages
import Brand from "./pages/Dashboard/pages/user/account/pages/brand";
import CreateBrand from "./pages/Dashboard/pages/user/account/pages/brand/create";
import BrandManage from "./pages/Dashboard/pages/user/account/pages/brand/manage";
import Wallet from "./pages/Dashboard/pages/user/account/pages/wallet";
import Support from "./pages/Dashboard/pages/user/account/pages/support";
import MyTickets from "./pages/Dashboard/pages/user/account/pages/support/tickets";
import NewTicket from "./pages/Dashboard/pages/user/account/pages/support/newticket";
// Designer pages
import PendingRequest from "./pages/Dashboard/pages/designer/pending";
import Accepted from "./pages/Dashboard/pages/designer/request";
import History from "./pages/Dashboard/pages/designer/history";
// Designer SubPages
import AvailableRequest from "./pages/Dashboard/pages/designer/request/available";
import BrandInfo from "./pages/Dashboard/pages/designer/request/brand";
// Admin Pages
import AllRequest from "./pages/Dashboard/pages/admin/request";
import Payments from "./pages/Dashboard/pages/admin/payments";
import Tickets from "./pages/Dashboard/pages/admin/tickets";
import Designs from "./pages/Dashboard/pages/admin/designs";
import CreateDesigners from "./pages/Dashboard/pages/admin/designers";
// Component
import Protected from "./components/protected/protected";
import ErrorPage from "./pages/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/verify-payment",
    element: <VerifyPayment />,
    errorElement: <ErrorPage />,
  },
  { path: "/auth", element: <Auth />, errorElement: <ErrorPage /> },
  { path: "/portal", element: <Portal />, errorElement: <ErrorPage /> },
  { path: "/forgot", element: <ForgotPwd />, errorElement: <ErrorPage /> },
  { path: "/reset", element: <ResetPwd />, errorElement: <ErrorPage /> },
  { path: "/google", element: <GoogleRedirect />, errorElement: <ErrorPage /> },
  {
    path: "/dashboard",
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <Protected>
            <HomeDash />
          </Protected>
        ),
      },
      // All
      {
        path: "ticket/:id",
        element: <SingleTicket />,
      },
      // User
      {
        path: "user",
        element: <Overview />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "idea",
        element: <Ideate />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "brand",
            element: <Brand />,
            children: [
              {
                path: "",
                element: <Navigate to='/dashboard/account/brand/create' />,
              },
              {
                path: "create",
                element: <CreateBrand />,
              },
              {
                path: "manage",
                element: <BrandManage />,
              },
            ],
          },
          {
            path: "wallet",
            element: <Wallet />,
          },
          {
            path: "ticket",
            element: <Support />,
            children: [
              {
                path: "",
                element: <Navigate to='/dashboard/account/ticket/tickets' />,
              },
              {
                path: "tickets",
                element: <MyTickets />,
              },
              {
                path: "new",
                element: <NewTicket />,
              },
            ],
          },
        ],
      },
      // Designer
      {
        path: "designer",
        element: <PendingRequest />,
      },
      {
        path: "request",
        element: <Accepted />,
        children: [
          {
            path: "",
            element: <AvailableRequest />,
          },
          {
            path: "brand/:id",
            element: <BrandInfo />,
          },
        ],
      },
      {
        path: "history",
        element: <History />,
      },
      // Admin
      {
        path: "admin",
        element: <AllRequest />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "designs",
        element: <Designs />,
      },
      {
        path: "create",
        element: <CreateDesigners />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
