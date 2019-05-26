const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatisticsSchema = new Schema({
    info_from: {
        type: String,
        required: false,
    },
    info_from_other: {
        type: String,
        required: false,
        default: "",
    },
    info_when: {
        type: String,
        required: false,
    },
    info_when_other: {
        type: String,
        required: false,
        default: "",
    },
    motivation: {
        type: String,
        required: true
    },
    motivation_other: {
        type: String,
        required: true,
        default: ""
    },
    relation: {
        type: String,
        required: false,
    },
});
module.exports = Statistics = mongoose.model("statistics", StatisticsSchema);
