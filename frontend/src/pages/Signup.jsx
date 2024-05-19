import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [salary, setSalary] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/auth/register", {
        userName,
        email,
        password,
        salary,
      })
      .then((result) => {
        console.log(result);
        alert("User Registerd successfully");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setError("Registration failed. please try again");
      });
    console.log(userName);
    console.log("Current value of fullName:", setUsername);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Signup</h2>
          {error && <p className="text-danger">{error}</p>}
          <form onSubmit={formHandler}>
            <div className="mb-3">
              <label htmlFor="username">
                <strong>Username</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control "
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="salary">
                <strong>Salary</strong>
              </label>
              <input
                type="salary"
                placeholder="Enter Salary"
                className="form-control "
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <button className="btn btn-success w-100 ">
              <strong>Signup</strong>
            </button>
            <p>Accept terms and agreement</p>
            <Link
              to="/"
              className="btn btn-default border w-100 bg-light text-decoration-none"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
