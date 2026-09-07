require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/database");

const contactRoutes = require("./routes/contactRoutes");
const photoRoutes = require("./routes/photoRoutes");

const app = express();

const PORT = process.env.PORT || 3011;

app.use(cors());
app.use(express.json());

app.use("/api/photos", photoRoutes);
app.use("/api/contacts", contactRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Pawmatess API is running",
  });
});

db.getConnection()
  .then((connection) => {
    console.log("Database connected successfully");
    connection.release();
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });

app.listen(PORT, () => {
  console.log(`Pawmatess API running on http://localhost:${PORT}`);
});