// import { axios } from "axios";
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Signup.css";
import ValidationSignup from "./ValidationSignup";

const Signup = () => {
  //  const history=useHistory();

  // const [isDisabled, setDisabled] = useState(false);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    pass: "",
  });

  //   Validation SignUPForm validationSignup.jsx

  const [errors, setErrors] = useState({});

  // ________________________________

  const handel = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);

    // console.log(newData);
  };
  const url="https://61d2b884b4c10c001712b552.mockapi.io/testlogin/login/login"
  const submit = (e) => {
    e.preventDefault();
    setErrors(ValidationSignup(data));
    // axios.post(url, {
    //         fname: data.fname,
    //         lname: data.lname,
    //         email: data.email,
    //         phone: data.phone,
    //         pass: data.pass,
    // })
    // .then((res) => {
    //   console.log(res);
    //   alert("Your Regitation Sussefull");

    // });
   fetch("https://61d2b884b4c10c001712b552.mockapi.io/testlogin/login/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        phone: data.phone,
        pass: data.pass,
      }),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
    // setDisabled(true)
    setData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      pass: "",
    });
  };

  return (
    <>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card card1">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={submit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          
                          className="form-control form-control-lg"
                          name="fname"
                          value={data.fname}
                          onChange={(e) => {
                            handel(e);
                          }}
                          placeholder="First Name"
                        />
                        {errors.fname && (
                          <p className="error">{errors.fname}</p>
                        )}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"                        
                          className="form-control form-control-lg"
                          name="lname"
                          value={data.lname}
                          onChange={handel}
                          placeholder="Last Name"
                        />
                        {errors.lname && (
                          <p className="error">{errors.lname}</p>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          value={data.email}
                          onChange={handel}
                          placeholder="Email Address"
                        />
                        {errors.email && (
                          <p className="error">{errors.email}</p>
                        )}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          name="phone"
                          value={data.phone}
                          onChange={handel}
                          placeholder="Phone No"
                        />
                        {errors.phone && (
                          <p className="error">{errors.phone}</p>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          name="pass"
                          value={data.pass}
                          onChange={handel}
                          placeholder="Password"
                        />
                        {errors.pass && <p className="error">{errors.pass}</p>}
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?
                        <NavLink to="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </NavLink>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
