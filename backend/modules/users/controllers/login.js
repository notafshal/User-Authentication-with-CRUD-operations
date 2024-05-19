const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const userModel = mongoose.model("users");
  const { email, password } = req.body;
  try {
    const getUser = await userModel.findOne({
      email: email,
    });
    if (!getUser) throw "This email doesnot exist";

    const comparePassword = await bcrypt.compare(password, getUser.password);
    if (!comparePassword) throw "Email and password do not match!!";

    const accessToken = await jwt.sign(
      {
        _id: getUser._id,
        userName: getUser.userName,
      },
      process.env.jwt_salt
    );

    res.status(200).json({
      status: "Success",
      message: "logged in successfully",
      accessToken: accessToken,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = login;
