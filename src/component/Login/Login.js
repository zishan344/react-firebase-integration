import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInGoogle } = useFirebase();

  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={signInGoogle}>Google Sign In</button>
      </div>
      <form>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
