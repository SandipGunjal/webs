import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    mesg: "",
  });

  const submitForm = () => {
    alert(`My Name is :${data.first}
            and Last Name is ${data.last}
            Mobile No is : ${data.phone}
            Email is : ${data.email}
            Message : ${data.mesg}`);
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="first"
                  value={data.first}
                  onChange={inputEvent}
                  placeholder="first name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="last"
                  value={data.last}
                  onChange={inputEvent}
                  placeholder="last name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  PhoneNo
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="ex.9876542345"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="mesg"
                  value={data.mesg}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit Form
              </button>
            </form>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
