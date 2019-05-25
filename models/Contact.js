const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    social: String,
    skype: String,
    telegram: String,
    other_name: String,
    other_link: String,
});
module.exports = Contact = mongoose.model("contact", ContactSchema);
