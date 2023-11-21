import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// Component
import Loader from "../loader";

const Protected = ({ children }) => {
  const { account, loading } = useSelector((store) => store.auth);
  if (loading) {
    return (
      <div className='h-half sm:h-screen grid place-items-center'>
        <Loader className='w-20 h-20' />
      </div>
    );
  }
  if (!account) {
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;
