import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Login = (props) => {
  const ctx = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navi = useNavigate();
  const formSubmissionHandeler = (event) => {
    event.preventDefault();

    if (
      emailRef.current.value === "foo" &&
      passwordRef.current.value === "bar"
    ) {
      ctx.onLogin();
      navi("/home");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5  font-weight-bold fs-5">
                Login
              </h5>
              <form onSubmit={formSubmissionHandeler}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="floatingUserName"
                    type="text"
                    ref={emailRef}
                    placeholder="Please Enter UserName"
                  />
                  <label htmlFor="floatingUserName">UserName</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="floatingPassword"
                    type="password"
                    ref={passwordRef}
                    placeholder="Please Enter Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
