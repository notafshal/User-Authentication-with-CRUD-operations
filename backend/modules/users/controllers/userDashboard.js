const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const userModel = mongoose.model("users");
  const getUser = await userModel
    .findOne({
      _id: req.user._id,
    })
    .select("userName email salary");
  console.log(req.user);
  res.status(200).json({
    status: "success",
    data: getUser,
  });
};
module.exports = userDashboard;
