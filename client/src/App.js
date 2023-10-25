import "./App.css";
// Toastify
import Toast from "./components/toast";
// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
function App() {
  return (
    <div className='App overflow-hidden'>
      <Toast />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
