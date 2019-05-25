const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    address_index: {
        type: Number,
        required: false,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    house: {
        type: Number,
        required: true,
    },
    house_index: {
        type: String,
        required: false,
    },
    flat: {
        type: Number,
        required: false,
    },

});
module.exports = Address = mongoose.model("address", AddressSchema);
