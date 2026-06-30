const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    ctc: {
      type: String,
      required: true,
    },

    eligibleBranches: [
      {
        type: String,
      },
    ],

    minCgpa: {
      type: Number,
      required: true,
    },

    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Company",
  companySchema
);