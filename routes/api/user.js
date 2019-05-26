const express = require("express");
const router = express.Router();
const UserName = require("../../models/UserName");
const Address = require("../../models/Adress");
const Contact = require("../../models/Contact");
const Disease = require("../../models/Disease");
const Health = require("../../models/Health");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateNameInput = require("../../validation/name");

// User Name add
router.post("/name/add", (req, res) => {
    const {errors, isValid} = validateNameInput(req.body);
    const id = req.body.id;

    User.findById(id).then(user => {
        if (!user) {
            errors.user = "Пользователь не найден";
            return res.status(404).json(errors);
        }
        UserName.findOne({id}).then(userName => {
            if (!userName) {
                if (!isValid) {
                    return res.status(400).json(errors);
                }
                const newUserName = new UserName({
                    id: req.body.id,
                    first_name: req.body.first_name,
                    second_name: req.body.second_name,
                    family: req.body.family,
                    birthday: req.body.birthday,
                    gender: req.body.gender,
                    national: req.body.national,
                });
                newUserName
                    .save()
                    .then((data) => res.status(200).json(data.toJSON()))
                    .catch(err => res.status(500).send(err));
            } else {
                if (!isValid) {
                    return res.status(400).json(errors);
                }
                userName.first_name = req.body.first_name;
                userName.second_name = req.body.second_name;
                userName.family = req.body.family;
                userName.birthday = req.body.birthday;
                userName.gender = req.body.gender;
                userName.national = req.body.national;
                userName
                    .save()
                    .then((data) => res.status(200).json(data.toJSON()))
                    .catch(err => res.status(500).send(err));
            }


        })
    })
        .catch(err => res.status(422).send('User Not Found'));

});

router.post("/name/view", (req, res) => {

    const id = req.body.id;

    UserName.findOne({id}).then(userName => {
        if (!userName) {

            return res.status(404).json("Пользователь не найден");
        }

        return res.status(200).json(userName);

    });
});

// Address add
router.post("/address/add", (req, res) => {

    const id = req.body.id;

    User.findById(id).then(user => {
        if (!user) {
            errors.user = "Пользователь не найден";
            return res.status(404).json(errors);
        }

        Address.findOne({id}).then(address => {
            if (!address) {
                const newAddress = new Address({
                    id: req.body.id,
                    address_index: req.body.address_index,
                    city: req.body.city,
                    street: req.body.street,
                    house: req.body.house,
                    house_index: req.body.house_index,
                    flat_number: req.body.flat_number,
                });
                newAddress
                    .save()
                    .then((data) => res.status(200).json(data.toJSON()))
                    .catch(err => res.status(500).send(err));
            } else {

                address.address_index = req.body.address_index;
                address.city = req.body.city;
                address.street = req.body.street;
                address.house = req.body.house;
                address.house_index = req.body.house_index;
                address.flat_number = req.body.flat_number;
                address
                    .save()
                    .then((data) => res.status(200).json(data.toJSON()))
                    .catch(err => res.status(500).send(err));
            }
        });
    })
        .catch(err => res.status(422).send('User Not Found'));

});

// Contact info add
router.post("/contact/add", (req, res) => {

    const id = req.body.id;

    User.findById(id).then(user => {
        if (!user) {
            errors.user = "Пользователь не найден";
            return res.status(404).json(errors);
        }
        Contact.findOne({id}).then(contact => {
            if (!contact) {
                const newContact = new Contact({
                    id: req.body.id,
                    phone: req.body.phone,
                    email: req.body.email,
                    social: req.body.social,
                    skype: req.body.skype,
                    telegram: req.body.telegram,
                    other_name: req.body.other_name,
                    other_link: req.body.other_link,
                });
                newContact
                    .save()
                    .then((data) => res.status(200).json(data.toJSON()))
                    .catch(err => res.status(500).send(err));
            } else {
                contact.phone = req.body.phone;
                contact.email = req.body.email;
                contact.social = req.body.social;
                contact.skype = req.body.skype;
                contact.telegram = req.body.telegram;
                contact.other_name = req.body.other_name;
                contact.other_link = req.body.other_link;
                contact
                    .save()
                    .then((data) => res.status(200).json(data.toJSON()))
                    .catch(err => res.status(500).send(err));
            }
        })

    })
        .catch(err => res.status(422).send('User Not Found'));
});

// disease info add
router.post("/disease/add", (req, res) => {

    const id = req.body.id;

    User.findById(id).then(user => {
        if (!user) {
            errors.user = "Пользователь не найден";
            return res.status(404).json(errors);
        }
        Disease.findOne({id}).then(disease => {
            if (!disease) {
                const newDisease = new Disease({
                    id: req.body.id,
                    opuhali: req.body.opuhali,
                    diabet: req.body.diabet,
                    davlenie: req.body.davlenie,
                    heart: req.body.heart,
                    sosudi: req.body.sosudi,
                    blood_svert: req.body.blood_svert,
                    blood_nasled: req.body.blood_nasled,
                    pochki: req.body.pochki,
                    shitovidka: req.body.shitovidka,
                    autoimmun: req.body.autoimmun,
                    nervi: req.body.nervi,
                    vich: req.body.vich,
                    gepatit: req.body.gepatit,
                    sifilis: req.body.sifilis,
                    tuberculez: req.body.tuberculez,
                    infekcia: req.body.infekcia,
                    gormoni: req.body.gormoni,
                    transplantacia: req.body.transplantacia,
                    rodst_leikimia: req.body.rodst_leikimia,
                    rodst_rak: req.body.rodst_rak,
                    rodst_icob: req.body.rodst_icob,
                    spid: req.body.spid,
                    poniatno: req.body.poniatno,
                    spid_contact: req.body.spid_contact,
                    anastesia_make: req.body.anastesia_make,
                    react: req.body.react,
                    react_type: req.body.react_type,
                    rodst: req.body.rodst,
                    other_moment: req.body.other_moment,
                });
                newDisease
                    .save()
                    .then((data) => res.status(200).json(data.toJSON()))
                    .catch(err => res.status(500).send(err));
            } else {

                disease.opuhali = req.body.opuhali;
                disease.diabet = req.body.diabet;
                disease.davlenie = req.body.davlenie;
                disease.heart = req.body.heart;
                disease.sosudi = req.body.sosudi;
                disease.blood_svert = req.body.blood_svert;
                disease.blood_nasled = req.body.blood_nasled;
                disease.pochki = req.body.pochki;
                disease.shitovidka = req.body.shitovidka;
                disease.autoimmun = req.body.autoimmun;
                disease.nervi = req.body.nervi;
                disease.vich = req.body.vich;
                disease.gepatit = req.body.gepatit;
                disease.sifilis = req.body.sifilis;
                disease.tuberculez = req.body.tuberculez;
                disease.infekcia = req.body.infekcia;
                disease.gormoni = req.body.gormoni;
                disease.transplantacia = req.body.transplantacia;
                disease.rodst_leikimia = req.body.rodst_leikimia;
                disease.rodst_rak = req.body.rodst_rak;
                disease.rodst_icob = req.body.rodst_icob;
                disease.spid = req.body.spid;
                disease.poniatno = req.body.poniatno;
                disease.spid_contact = req.body.spid_contact;
                disease.anastesia_make = req.body.anastesia_make;
                disease.react = req.body.react;
                disease.react_type = req.body.react_type;
                disease.rodst = req.body.rodst;
                disease.other_moment = req.body.other_moment;
                disease
                    .save()
                    .then((data) => res.status(200).json(data.toJSON()))
                    .catch(err => res.status(500).send(err));
            }
        })
    })
        .catch(err => res.status(422).send('User Not Found'));
});

// disease info add
router.post("/health/add", (req, res) => {

    const id = req.body.id;

    User.findById(id).then(user => {
        if (!user) {
            errors.user = "Пользователь не найден";
            return res.status(404).json(errors);
        }

        const newHealth = new Health({
            id: req.body.id,
            childbearing: req.body.childbearing,
            childbearing_count: req.body.childbearing_count,
            blood: req.body.blood,
            factor: req.body.factor,
            transfusion: req.body.transfusion,
            transfusion_what: req.body.transfusion_what,
            transfusion_date: req.body.transfusion_date,
            transfusion_count: req.body.transfusion_count,
            allergy: req.body.allergy,
            allergy_type: req.body.allergy_type,
            height: req.body.height,
            weight: req.body.weight,
            smoke: req.body.smoke,
            alcohol: req.body.alcohol,
            donor: req.body.donor,
            donor_out: req.body.donor_out,
            donor_out_couse: req.body.donor_out_couse,
            medical: req.body.medical,
            medical_type: req.body.medical_type,
            operation: req.body.operation,
            operation_type: req.body.operation_type,
            fever: req.body.fever,
            crash: req.body.crash,
        });
        newHealth
            .save()
            .then((data) => res.status(200).json(data.toJSON()))
            .catch(err => res.status(500).send(err));
    })
        .catch(err => res.status(422).send('User Not Found'));

});

module.exports = router;
