const mongoose = require("mongoose");

const deleteUser = async (req, res, next) => {
  const userModel = mongoose.model("users");

  try {
    const _id = req.params.id;
    const user = await userModel.findByIdAndDelete(_id);

    if (!user) {
      throw new Error("User not found.");
    }

    res.status(200).json({
      status: "User Deleted Successfully",
      data: user,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = deleteUser;
