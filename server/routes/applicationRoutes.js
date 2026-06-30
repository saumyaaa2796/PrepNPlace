const express = require("express");
const router = express.Router();

const {
  applyToCompany,
  getMyApplications,
  updateApplicationStatus,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, applyToCompany);

router.get("/my", protect, getMyApplications);

router.put("/:id", protect, updateApplicationStatus);

module.exports = router;