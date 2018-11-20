const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  todos: {
    type: [String]
  }
});

module.exports = Todos = mongoose.model("todos", TodosSchema);
