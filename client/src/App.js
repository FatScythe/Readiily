import "./App.css";
// Pages
import Homepage from "./pages/home";
import Auth from "./pages/Auth";
// Toastify
import Toast from "./components/toast";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  { path: "/auth", element: <Auth /> },
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
