const Company = require("../models/Company");

const addCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);

    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();

    res.json(companies);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const checkEligibility = async (req, res) => {
  try {
    const { branch, cgpa } = req.body;

    const companies = await Company.find();

    const eligible = companies.filter((company) => {
      return (
        company.eligibleBranches.includes(branch) &&
        cgpa >= company.minCgpa
      );
    });

    res.json({ eligible });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  addCompany,
  getCompanies,
  checkEligibility,
};