require("dotenv").config();
const app = require("./routes");
const mongoose = require("mongoose");

const port = process.env.PORT || 8000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
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
