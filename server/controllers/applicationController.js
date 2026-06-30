const Application = require("../models/Application");

const applyToCompany = async (req, res) => {
  try {
    const { company } = req.body;

    const alreadyApplied = await Application.findOne({
      student: req.user._id,
      company,
    });

    if (alreadyApplied) {
      return res.status(400).json({
        message: "You have already applied to this company.",
      });
    }

    const application = await Application.create({
      student: req.user._id,
      company,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      student: req.user._id,
    }).populate("company");

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    application.status = status;

    await application.save();

    res.json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  applyToCompany,
  getMyApplications,
  updateApplicationStatus,
};