import { Navigate } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";

const HomeDash = () => {
  const { account } = useSelector((store) => store.auth);
  return (
    <section>
      {account && account.role ? (
        <Navigate to={`${account.role}`} />
      ) : (
        <Navigate to='/auth' />
      )}
    </section>
  );
};

export default HomeDash;
