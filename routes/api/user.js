const express = require("express");
const router = express.Router();
const UserName = require("../../models/UserName");
const Address = require("../../models/Adress");
const Contact = require("../../models/Contact");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateNameInput = require("../../validation/name");

// User Name add
router.post("/name/add", (req, res) => {
    const {errors, isValid} = validateNameInput(req.body);

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
        .then(userName => res.json(userName))
        .catch(err => console.log(err));

    return res.status(200).json(newUserName);
});


router.post("/name/view", (req, res) => {

    const id = req.body.id;

    UserName.findOne({ id }).then(userName => {
        if (!userName) {

            return res.status(404).json("Пользователь не найден");
        }

        return res.status(200).json(userName);

    });
});



// Address add
router.post("/address/add", (req, res) => {
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
        .then(userName => res.json(userName))
        .catch(err => console.log(err));

    return res.status(200).json(newAddress);
});
// Contact info add
router.post("/contact/add", (req, res) => {
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
        .then(userName => res.json(userName))
        .catch(err => console.log(err));

    return res.status(200).json(newContact);
});

module.exports = router;
