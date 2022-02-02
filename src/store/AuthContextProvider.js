import { useState } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const loginHandler = () => {
    setisLoggedIn(true);
  };
  const logoutHandler = () => {
    setisLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
