const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HealthSchema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    childbearing: {
        type: Boolean,
        required: true,
    },
    childbearing_count: {
        type: Number,
        required: false,
    },
    blood: {
        type: Number,
        required: false,
    },
    factor: {
        type: String,
        required: false,
    },
    transfusion: {
        type: Boolean,
        required: true,
    },
    transfusion_what: {
        type: String,
        required: false,
        default: "",
    },
    transfusion_date: {
        type: Number,
        min: 1920,
        max: 2100,
        required: false,
    },
    transfusion_count: {
        type: Number,
        required: false,
    },
    allergy: {
        type: Boolean,
        required: true,
    },
    allergy_type: {
        type: String,
        required: false,
        default: "",
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    smoke: {
        type: Boolean,
        required: true,
    },
    alcohol: {
        type: Boolean,
        required: true,
    },
    donor: {
        type: Boolean,
        required: true,
    },
    donor_out: {
        type: Boolean,
        required: true,
    },
    donor_out_couse: {
        type: String,
        require: false,
        default: ""
    },
    medical: {
        type: Boolean,
        required: true,
    },
    medical_type: {
        type: String,
        required: false,
        default: "",
    },
    operation: {
        type: Boolean,
        required: true,
    },
    operation_type: {
        type: String,
        required: false,
        default: "",
    },
    fever: {
        type: Boolean,
        required: true,
    },
    crash: {
        type: Boolean,
        required: true,
    },

});
module.exports = Health = mongoose.model("health", HealthSchema);
