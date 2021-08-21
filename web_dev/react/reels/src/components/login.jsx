import React, { useContext } from "react";
import { signInWithGoogle } from "../firebase";
import { authContext } from "../AuthProvider";
import { Redirect } from "react-router-dom";

let Login = () => {
  const user = useContext(authContext);
  console.log(user);

  return (
    <>
      {user ? <Redirect to="/" /> : ""}
      <button
        onClick={() => {
          signInWithGoogle();
        }}
        className="btn btn-primary m-4"
      >
        Login with google
      </button>
    </>
  );
};

export default Login;
