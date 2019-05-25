const express = require("express");
const router = express.Router();
const UserName = require("../../models/UserName");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// User Name add
router.post("/name/add", (req, res) => {

    console.log('asd');

    User.findOne({name: req.params.login}).then(user_name => {


        const newUserName = new UserName({
            login: req.body.login,
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            family: req.body.family
        });

        newUserName
            .save()
            .then(user_name => res.json(user_name))
            .catch(err => console.log(err));

    });
});

module.exports = router;
