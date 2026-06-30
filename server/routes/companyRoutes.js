const express = require("express");
const router = express.Router();

const {
  addCompany,
  getCompanies,
  checkEligibility,
} = require("../controllers/companyController");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  admin,
} = require("../middleware/adminMiddleware");

router.post("/", protect, admin, addCompany);
router.get("/", protect, getCompanies);

router.post(
  "/check-eligibility",
  protect,
  checkEligibility
);

module.exports = router;