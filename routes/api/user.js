const express = require("express");
const router = express.Router();
const UserName = require("../../models/UserName");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateNameInput = require("../../validation/name");

// User Name add
router.post("/name/add", (req, res) => {
    const { errors, isValid } = validateNameInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // User.findOne({name: req.body.login}).then(userName => {

        const newUserName = new UserName({
            login: req.body.login,
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

    // });

    return res.status(200).json(newUserName);
});

module.exports = router;
