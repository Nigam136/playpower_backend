const express = require("express");
const sequelize = require("./config/db");
const User = require("./model/User");
const Assignment = require("./model/Assignment");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const assRoutes = require("./routes/assRoutes");
const PORT = 5000;

const app = express();
app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   res.json({ "hello world" });
// });

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/ass", assRoutes);

connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("----------------------------------------");
    console.log("Authentication successfull...");
    console.log("----------------------------------------");

    await User.sync({ alter: true });
    console.log("----------------------------------------");
    console.log("syncing successfull with the database...");
    console.log("----------------------------------------");
    await Assignment.sync({ alter: true });

    console.log("----------------------------------------");
    console.log("syncing successfull with the database...");
    console.log("----------------------------------------");
  } catch (err) {
    console.log(
      "unsuccessfull connection, check your database configuration..."
    );
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
