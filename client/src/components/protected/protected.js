// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const { account, loading } = useSelector((store) => store.auth);
  // const [isLogged, setIsLoggedIn] = useState(null)
  if (loading) {
    return <div>Loading</div>;
  }
  if (!account) {
    return <Navigate to='/' />;
  }

  return children;
};

export default Protected;
