const InterviewExperience = require(
  "../models/InterviewExperience"
);

const addExperience = async (req, res) => {
  try {
    const {
      company,
      role,
      rounds,
      experience,
    } = req.body;

    const interview =
      await InterviewExperience.create({
        company,
        role,
        rounds,
        experience,
        author: req.user._id,
      });

    res.status(201).json(interview);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getExperiences = async (req, res) => {
  try {
    const interviews =
      await InterviewExperience.find()
      .populate("author", "name email");

    res.json(interviews);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getExperiencesByCompany =
  async (req, res) => {
    try {
      const interviews =
        await InterviewExperience.find({
          company: req.params.company,
        }).populate(
          "author",
          "name email"
        );

      res.json(interviews);

    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {
  addExperience,
  getExperiences,
  getExperiencesByCompany,
};