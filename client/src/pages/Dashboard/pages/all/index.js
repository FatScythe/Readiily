import { Navigate } from "react-router-dom";

const HomeDash = () => {
  return (
    <section>
      {true && <Navigate to='user' />}
      {false && <Navigate to='designer' />}
      {false && <Navigate to='admin' />}
    </section>
  );
};

export default HomeDash;
