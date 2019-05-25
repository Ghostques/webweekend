const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserNameSchema = new Schema({
    _id: {
      type: String,
      required: true,
        unique: true,
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
    },
    birthday: {
        type: Date,
        min: '1920-01-01',
    },
    gender: {
        type: Number,
        min: 0,
        max: 1,
        required: true,
    },
    national: {
        type: String,
        required: true,
    },
});
module.exports = UserName = mongoose.model("user_name", UserNameSchema);
