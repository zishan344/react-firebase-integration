import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
const auth = getAuth(app);
const Login = () => {
  const [signInWittGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h2>Please Login</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={() => signInWittGoogle()}>Google Sign In</button>
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
