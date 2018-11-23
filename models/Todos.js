const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  todos: [
    {
      title:{
        type: String
      }
    }
  ]
});

module.exports = Todos = mongoose.model("todos", TodosSchema);
