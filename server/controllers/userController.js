const User = require("../models/User");

const getProfile = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.branch = req.body.branch || user.branch;
    user.cgpa = req.body.cgpa || user.cgpa;
    user.graduationYear =
      req.body.graduationYear || user.graduationYear;

    const updatedUser = await user.save();

    const safeUser = await User.findById(updatedUser._id)
  .select("-password");

res.json(safeUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};