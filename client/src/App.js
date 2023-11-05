import "./App.css";
import { useEffect } from "react";
// Toastify
import Toast from "./components/toast";
// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// Redux
import { useDispatch } from "react-redux";
import { saveAccount, removeAccount } from "./features/auth/authSlice";
// Utils
import url from "./utils/url";

function App() {
  const dispatch = useDispatch();

  const fetchAccount = async () => {
    try {
      const response = await fetch(url + "/api/v1/account/showMe");
      if (!response.ok) {
        dispatch(removeAccount());
      }
      const data = await response.json();

      if (data?.msg) {
        console.error(data.msg);
        dispatch(removeAccount());
        return;
      }

      dispatch(saveAccount(data));
    } catch (error) {
      console.error(error);
      dispatch(removeAccount());
    }
  };

  useEffect(() => {
    fetchAccount();
  });

  return (
    <div className='App overflow-hidden'>
      <Toast />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
