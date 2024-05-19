import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../services/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const user = await loginService(credentials).then((result) => {
        localStorage.setItem("accessToken", result.accessToken);
        navigate("/profile");
      });
      console.log(user);
    } catch (e) {
      console.log("Login failed", e);
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Login</h2>
          {error && <p className="text-danger">{error}</p>}
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passsword">
                <strong>Password</strong>
              </label>
              <input
                type="password "
                placeholder="Enter Password"
                className="form-control "
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 ">
              <strong>Login</strong>
            </button>
            <p>Accept terms and agreement</p>
            <Link
              to="/Signup"
              className="btn btn-default border w-100 bg-light text-decoration-none"
            >
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
