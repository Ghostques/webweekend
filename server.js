const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");
const adminSeeder = require("./seed/adminSeeder");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/yourappdb")
  .then(() => {
    console.log("connected to db");
    adminSeeder();
  })
  .catch(error => console.log(error));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
