const express = require("express");

const router = express.Router();

const {
  addExperience,
  getExperiences,
  getExperiencesByCompany,
} = require("../controllers/interviewController");

const {
  protect,
} = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  addExperience
);

router.get(
  "/",
  protect,
  getExperiences
);

router.get(
  "/company/:company",
  protect,
  getExperiencesByCompany
);

module.exports = router;