// Pages
import Homepage from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import HomeDash from "./pages/Dashboard/pages/all";
// Router
import { createBrowserRouter } from "react-router-dom";
// User pages
import Overview from "./pages/Dashboard/pages/user/home";
import Account from "./pages/Dashboard/pages/user/account";
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
        element: <h1 className='text-center text-2xl mt-10'>Coming soon!!!</h1>,
      },
      {
        path: "account",
        element: <Account />,
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
