const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const { mongoUrl } = require("./keys");
require("./models/Vendor");
require("./models/Client");
require("./models/Service");
require("./models/Review");
require("./models/Receipt");
require("./models/Category");
require("./models/SubCategory");
require("./models/UnVerifiedVendors");
require("./models/BlockedVendors");
require("./models/BlockedService");
require("./models/OngoingOrder");
require("./models/CancelledOrder");
require("./models/AcceptedOrder");

const authRoutes = require("./routes/authRoutes");

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log("This is error", err);
});

var server = app.listen(PORT, () => {
  var port = server.address().PORT;
  console.log("Server is running on PORT: " + port);
});
