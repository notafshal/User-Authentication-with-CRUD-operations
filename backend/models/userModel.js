const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "UserName required!!!!"],
    },
    email: {
      type: String,
      required: [true, "Email required!!!!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password required!!!!"],
    },
    salary: {
      type: Number,
      required: [true, "Salary required!!!!"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
