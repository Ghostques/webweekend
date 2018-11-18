const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const users = require('./routes/api/users')
const todos = require('./routes/api/todos')

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/tododb")
  .then(() => console.log("connected to db"))
  .catch(error => console.log(error));


app.get("/", (req, res) => res.send("hello!"));

app.use('/api/users', users)
app.use('/api/todos', todos)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
