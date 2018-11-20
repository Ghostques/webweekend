const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Todos = require("../../models/Todos");
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "Todos works" }));

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Todos.findOne({ user: req.user.id })
      .populate("user", ["name"])
      .then(todos => {
        if (!todos) {
          errors.notodos = "Нет дел";
          return res.status(404).json(errors);
        }
        res.json(todos);
      })
      .catch(err => res.status(404).json(err));
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const todosFields = {};
    todosFields.user = req.user.id;
    if (typeof req.body.todos !== "undefined") {
      todosFields.todos = req.body.todos.split(",");
    }

    Todos.findOne({ user: req.user.id }).then(todos => {
      if (todos) {
        Todos.findOneAndUpdate(
          { user: req.user.id },
          { $set: todosFields },
          { new: true }
        ).then(todos => res.json(todos));
      } else {
        new Todos(todosFields).save().then(todos => res.json(todos));
      }
    });
  }
);

module.exports = router;
