import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = ({ user }) => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("accessToken");
    try {
      await axios.put(
        `http://localhost:8000/api/auth/profile/${user.data._id}`,
        { userName, email, salary },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Profile Updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Edit Your Information</h2>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="salary">
                <strong>salary</strong>
              </label>
              <input
                type="text"
                placeholder="Enter salary"
                className="form-control "
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <button className="btn btn-success w-100 my-1"> Update</button>
            <Link to="/Profile" className="btn btn-success w-100 my-1">
              Go back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default EditProfile;
