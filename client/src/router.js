// Pages
import Homepage from "./pages/HomePage";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import HomeDash from "./pages/Dashboard/pages/all";
// Router
import { createBrowserRouter, Navigate } from "react-router-dom";
// User pages
import Overview from "./pages/Dashboard/pages/user/home";
import Account from "./pages/Dashboard/pages/user/account";
import Ideate from "./pages/Dashboard/pages/user/ideate";
import Calendar from "./pages/Dashboard/pages/user/calendar";
// Designer pages
import PendingRequest from "./pages/Dashboard/pages/designer/pending";
import AvailableRequest from "./pages/Dashboard/pages/designer/request";
import History from "./pages/Dashboard/pages/designer/history";
// Admin Pages
import AllRequest from "./pages/Dashboard/pages/admin/request";
import Payments from "./pages/Dashboard/pages/admin/payments";
import Tickets from "./pages/Dashboard/pages/admin/tickets";
import Designs from "./pages/Dashboard/pages/admin/designs";
// User SubPages
import Brand from "./pages/Dashboard/pages/user/account/pages/brand";
import CreateBrand from "./pages/Dashboard/pages/user/account/pages/brand/create";
import BrandManage from "./pages/Dashboard/pages/user/account/pages/brand/manage";
import Wallet from "./pages/Dashboard/pages/user/account/pages/wallet";
import Support from "./pages/Dashboard/pages/user/account/pages/support";
import MyTickets from "./pages/Dashboard/pages/user/account/pages/support/tickets";
import NewTicket from "./pages/Dashboard/pages/user/account/pages/support/newticket";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "/auth", element: <Auth /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <HomeDash />,
      },
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
      {
        path: "designer",
        element: <PendingRequest />,
      },
      {
        path: "request",
        element: <AvailableRequest />,
      },
      {
        path: "history",
        element: <History />,
      },
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
    ],
  },
  { path: "*", element: <div>Page Not Found : ) 404</div> },
]);
