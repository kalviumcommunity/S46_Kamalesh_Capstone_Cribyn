require("dotenv").config();
const app = require("./routes");
const mongoose = require("mongoose");

const port = process.env.PORT || 8000;


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
