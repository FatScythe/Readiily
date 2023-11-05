import { useSearchParams, Navigate } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { saveAccount } from "../../features/auth/authSlice";
// Toastify
import { toast } from "react-toastify";

const GoogleRedirect = () => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const avatar = searchParams.get("avatar");
  const role = searchParams.get("role");
  const userId = searchParams.get("userId");
  if (name || email || avatar || role || userId) {
    dispatch(saveAccount({ name, email, avatar, role, userId }));

    return <Navigate to='/dashboard' />;
  } else {
    setSearchParams((prev) => {
      prev.set("email", "");
      prev.set("name", "");
      prev.set("avatar", "");
      prev.set("role", "");
      prev.set("userId", "");
      return prev;
    });
    toast.info("Unable to sign in using Google");
    return <Navigate to='/auth' />;
  }
};

export default GoogleRedirect;
