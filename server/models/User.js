const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      default: "",
    },

    cgpa: {
      type: Number,
      default: 0,
    },
    role: {
  type: String,
  enum: ["student", "admin"],
  default: "student",
},

    graduationYear: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);