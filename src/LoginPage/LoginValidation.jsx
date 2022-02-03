import React from 'react';

const LoginValidation = (data) => {
 
    const errors={};
    if (!data.email) {
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid.";
      }
      if (!data.pass) {
        errors.pass = "Phone No is required.";
      } else if (data.pass.length < 5) {
        errors.pass = "Password must be more than Four character ";
      }
  return errors;
  

}

export default LoginValidation;
