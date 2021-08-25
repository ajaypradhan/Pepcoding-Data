import { useState } from "react";
import { useHistory } from "react-router-dom";

let SignUp = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Sign Up!</h1>
          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>

            <button className="btn btn-primary">Sign Up</button>
            <br />
            <br />
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
