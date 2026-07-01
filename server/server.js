const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "YOUR_VERCEL_URL",
  })
);
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users",
  require("./routes/userRoutes")
);
app.use(
  "/api/interviews",
  require("./routes/interviewRoutes")
);
app.get("/", (req, res) => {
  res.send("PrepNPlace API Running");
});
app.use(
  "/api/companies",
  require("./routes/companyRoutes")
);
app.use(
  "/api/applications",
  require("./routes/applicationRoutes")
);
app.use(
  "/api/posts",
  require("./routes/postRoutes")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});