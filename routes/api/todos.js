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
    const todoField = {};
    todoField.title = req.body.title;
    Todos.findOne({ user: req.user.id }).then(todos => {
      console.log(todos);
      if (todos === null) {
        new Todos({ todos: [], user: req.user.id }).save().then(todos => {
          todos.todos.push(todoField);
          todos.save().then(todos => res.json(todos));
        });
      } else {
        todos.todos.push(todoField);
        todos.save().then(todos => res.json(todos));
      }
    });
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const todoField = {};
    todoField.title = req.body.title;

    Todos.findOne({ user: req.user.id })
      .then(todos => {
        const removeIndex = todos.todos
          .map(item => item.id)
          .indexOf(req.params.id);
        todos.todos.splice(removeIndex, 1);
        todos.save().then(todos => res.json(todos));
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
