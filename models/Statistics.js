const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatisticsSchema = new Schema({
    info_from: {
        type: String,
        required: false,
    },
    info_when: {
        type: String,
        required: false,
    },
    motivation: {
        type: String,
        required: true
    },
    relation: {
        type: String,
        required: false,
    },
});
module.exports = Statistics = mongoose.model("statistics", StatisticsSchema);
