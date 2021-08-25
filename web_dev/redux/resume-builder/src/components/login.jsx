import { useHistory } from "react-router-dom";

let Login = () => {
   let history = useHistory()
  return (
    <>
      <div className="row">
        <div className="col-4 offset-4">
          <h1 className="mt-4 mb-4">Login</h1>
          <form className="mt-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
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
              />
            </div>

            <button className="btn btn-primary">Login</button>
            <br />
            <br />
            <button onClick={()=>{
                history.push("/signup")
            }} className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;