const express = require("express");
const router = express.Router();
const UserName = require("../../models/UserName");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// User Namee register
router.post("/user/name/add/:name", (req, res) => {

    console.log('asd');

    User.findOne({name: req.params.name}).then(user => {

        const newUserName = new UserName({
            login: req.params.name,
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            family: req.body.family
        });

        newUserName
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));

    });
});

module.exports = router;
