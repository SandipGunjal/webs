import React from "react";

const ValidationSignup = (data) => {
  const errors = {};

  if (!data.fname) {
    errors.fname = "First name is required.";
  }
  if (!data.lname) {
    errors.lname = "Last name is required.";
  }
  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid.";
  }
  if (!data.phone) {
    errors.phone = "Phone NO is required.";
  } else if (data.phone.length != 10) {
    errors.phone = "Enter Valid Number";
  }
  if (!data.pass) {
    errors.pass = "Phone No is required.";
  } else if (data.pass.length < 5) {
    errors.pass = "Password must be more than Four character ";
  }

  return errors;
};

export default ValidationSignup;
