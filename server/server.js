require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const propertyRoutes = require("./routes/propertyRoutes");
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/property", propertyRoutes);

const connectDB = async () => {
  try {
    mongoose.connect(process.env.mongoURI);
  } catch (err) {
    console.log(err);
  }
};

connectDB();

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.log(err);
  }
};

//HOME Route
app.get("/", (req, res) => {
  res.json({
    connectionStatus:
      mongoose.connection.readyState === 1 ? "Connected" : "Not connected",
  });
});

app.listen(port, () => {
  console.log(`server running in port ${process.env.PORT}`);
});
