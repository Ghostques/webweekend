const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiseaseSchema = new Schema({
    id: {
        type: String,
        require: true,
        unique: true,
    },
    opuhali: {
        type: Boolean,
        require: true,
    },
    diabet: {
        type: Boolean,
        require: true,
    },
    davlenie: {
        type: Boolean,
        require: true,
    },
    heart: {
        type: Boolean,
        require: true,
    },
    sosudi: {
        type: Boolean,
        require: true,
    },
    blood_svert: {
        type: Boolean,
        require: true,
    },
    blood_nasled: {
        type: Boolean,
        require: true,
    },
    pochki: {
        type: Boolean,
        require: true,
    },
    shitovidka: {
        type: Boolean,
        require: true,
    },
    autoimmun: {
        type: Boolean,
        require: true,
    },
    nervi: {
        type: Boolean,
        require: true,
    },
    psih: {
        type: Boolean,
        require: true,
    },
    vich: {
        type: Boolean,
        require: true,
    },
    gepatit: {
        type: Boolean,
        require: true,
    },
    sifilis: {
        type: Boolean,
        require: true,
    },
    tuberculez: {
        type: Boolean,
        require: true,
    },
    infekcia: {
        type: Boolean,
        require: true,
    },
    gormoni: {
        type: Boolean,
        require: true,
    },
    transplantacia: {
        type: Boolean,
        require: true,
    },
    rodst_leikimia: {
        type: Boolean,
        require: true,
    },
    rodst_rak: {
        type: Boolean,
        require: true,
    },
    rodst_icob: {
        type: Boolean,
        require: true,
    },
    spid: {
        type: Boolean,
        require: true,
    },
    poniatno: {
        type: Boolean,
        require: true,
    },
    spid_contact: {
        type: Boolean,
        require: true,
    },
    anastesia_make: {
        type: Boolean,
        require: true
    },
    react: {
        type: Boolean,
        require: false,
    },
    react_type: {
        type: String,
        require: false,
        default: "",
    },
    rodst: {
        type: Boolean,
        require: true,
    },
    other_moment: {
        type: String,
        require: false,
        default: "",
    },

});
module.exports = Disease = mongoose.model("disease", DiseaseSchema);
