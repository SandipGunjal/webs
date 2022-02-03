import axios from "axios";
import React from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import App from "./App";
import LoginValidation from "./LoginPage/LoginValidation";
const Login = () => {
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  const handelEvent = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  const url = "https://61f7e78c39431d0017eafaf3.mockapi.io/loginpage";

  const submits = (e) => {
    setErrors(LoginValidation(data));
    e.preventDefault();
    axios
      .post(url, {
        email: data.email,
        pass: data.pass,
      })
      .then((res) => {
        console.log(res);
      })
  };

  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={submits}>
                <div className="d-flex justify-content-around align-items-center mb-4 ">
                  <h1 className="font-weight-bold">LogIn Page</h1>
                </div>

                {/* <!-- Email input --> */}

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    onChange={handelEvent}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>

                {/* <!-- Password input --> */}

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    name="pass"
                    value={data.pass}
                    className="form-control form-control-lg"
                    placeholder="Password"
                    onChange={handelEvent}
                  />
                  {errors.pass && <p className="error">{errors.pass}</p>}
                </div>

                {/* <!-- Submit button --> */}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Log in
                </button>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <p className="text-center text-muted mt-3 mb-0">
                    Create New Account?
                    <NavLink to="/signup" className="fw-bold text-body">
                      <u> SignUp Here</u>
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
