import "./App.css";
// Pages
import Homepage from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import HomeDash from "./pages/Dashboard/pages/home";
// Toastify
import Toast from "./components/toast";
// Router
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Calendar from "./pages/Dashboard/pages/calendar";
import Account from "./pages/Dashboard/pages/account";

const router = createBrowserRouter([
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
        element: <Navigate to='/dashboard/home' />,
      },
      {
        path: "home",
        element: <HomeDash />,
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
    ],
  },
  { path: "*", element: <div>Page Not Found : ) 404</div> },
]);
function App() {
  return (
    <div className='App overflow-hidden'>
      <Toast />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
