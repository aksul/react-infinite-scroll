import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
const Header = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand m-0 fw-bold" to="/home">
            Contact
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link"></span>
              </li>
            </ul>
            <form>
              <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
                <>
                  {!ctx.isLogin && (
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  )}
                  {ctx.isLogin && (
                    <li>
                      <Link onClick={ctx.onLogout} to="/" className="nav-link">
                        Logout
                      </Link>
                    </li>
                  )}
                </>

                <></>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
