const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const userModel = mongoose.model("users");
  const { userName, email, password, salary } = req.body;

  try {
    //validation
    if (!email) throw "Email must be provided";
    if (!userName) throw "UserName must be provided";
    if (!password) throw "Password must be provided";
    if (!salary) throw "Salary must be provided";
    if (password.length < 5) throw "Password must be atleast 5 characters long";

    const getDuplicateEmail = await userModel.findOne({
      email: email,
    });
    if (getDuplicateEmail) {
      throw new Error("This email already Exists!!!");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      userName: userName,
      email: email,
      salary: salary,
      password: passwordHash,
    });
    const accessToken = await jwt.sign(
      {
        _id: newUser._id,
        userName: newUser.userName,
      },
      process.env.jwt_salt
    );
    res.status(201).json({
      status: "User Registerd Successfully",
      accessToken: accessToken,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = register;
