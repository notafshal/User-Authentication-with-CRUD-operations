const mongoose = require("mongoose");

const editUser = async (req, res, next) => {
  const userModel = mongoose.model("users");
  try {
    const _id = req.params.id;
    const { userName, email, salary } = req.body;
    if (!userName || !email || !salary) {
      throw new Error("All fields (userName, email, salary) are required.");
    }

    const user = await userModel.findByIdAndUpdate(
      _id,
      { userName, email, salary },
      { new: true, runValidators: true }
    );

    if (!user) {
      throw new Error("User not found.");
    }

    res.status(200).json({
      status: "User Updated Successfully",
      data: user,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = editUser;
