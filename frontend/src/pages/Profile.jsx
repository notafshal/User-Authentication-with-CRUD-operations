import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const profileInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://localhost:8000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
      } catch (e) {
        console.error("Error fetching profile:", e);
      }
    };
    profileInfo();
  }, []);
  const deleteUser = (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      axios.delete(`http://localhost:8000/api/auth/profile/${user.data._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("user Deleted");
      navigate("/");
    } catch (e) {
      console.error("Error deleting user:", e);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Profile</h2>
          <div>
            {user && user.data && (
              <>
                <p>Username: {user.data.userName}</p>
                <p>Email: {user.data.email}</p>
                <p>Salary: {user.data.salary}</p>
              </>
            )}

            <Link to="/editProfile" className="btn btn-success w-100 my-1">
              Edit Profile
            </Link>
            <button className="btn btn-danger w-100 my-1" onClick={deleteUser}>
              Delete Profile
            </button>
            <button
              className="btn btn-warning w-100 my-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <EditProfile user={user} className="d-none" />
    </>
  );
};
export default Profile;
