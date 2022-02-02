import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

function PrivateRoute({ children, ...rest }) {
  const context = useContext(AuthContext);
  return context.isLogin ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
