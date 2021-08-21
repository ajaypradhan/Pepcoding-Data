import { useContext } from "react";
import { auth } from "../firebase";
import { authContext } from "../AuthProvider";
import { Redirect } from "react-router-dom";

let Home = () => {
  const user = useContext(authContext);

  return (
    <>
      {user ? "" : <Redirect to="/login" />}
      <h1 className="m-4">Home</h1>
      <button
        className="btn btn-primary m-4"
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Home;
