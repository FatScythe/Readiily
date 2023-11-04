import { Navigate } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";

const HomeDash = ({ role }) => {
  const { account } = useSelector((store) => store.auth);
  if (!account) {
    return <Navigate to='/' />;
  }
  return (
    <section>
      {account.role === "user" && <Navigate to='user' />}
      {account.role === "admin" && <Navigate to='designer' />}
      {account.role === "admin" && <Navigate to='admin' />}
    </section>
  );
};

export default HomeDash;
