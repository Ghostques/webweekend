const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserNameSchema = new Schema({
    login: {
      type: String,
      required: true,
    },
    first_name: {
        type: String,
        required: true
    },
    second_name: {
        type: String,
        required: false,
        default: ""
    },
    family: {
        type: String,
        required: true
    }
});
module.exports = UserName = mongoose.model("user_name", UserNameSchema);
