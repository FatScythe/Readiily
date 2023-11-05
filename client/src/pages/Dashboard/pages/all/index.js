import { Navigate } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";

const HomeDash = () => {
  const { account } = useSelector((store) => store.auth);
  return (
    <section>
      {account.role === "user" && <Navigate to='user' />}
      {account.role === "admin" && <Navigate to='designer' />}
      {account.role === "admin" && <Navigate to='admin' />}
    </section>
  );
};

export default HomeDash;
