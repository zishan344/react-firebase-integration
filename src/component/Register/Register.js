import React from "react";

const Register = () => {
  return (
    <div>
      <h2>please Register now </h2>
      <form>
        <input type="text" placeholder="Enter Your name" />
        <br />
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email address"
        />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
