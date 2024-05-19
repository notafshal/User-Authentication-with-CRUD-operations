import Login from "../pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/editProfile" element={<EditProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routers;
