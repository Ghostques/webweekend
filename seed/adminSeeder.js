const User = require("../models/User");
const bcrypt = require("bcryptjs");

const adminSeeder = () => {
  User.findOne({ name: "admin" }).then(user => {
    if (user) {
      console.log("admin already exist");
    } else {
      console.log("admin does not exist");
      const admin = new User({
        name: "admin",
        role: "admin",
        password: "123456"
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(admin.password, salt, (err, hash) => {
          if (err) throw err;
          admin.password = hash;
          admin
            .save()
            .then(console.log("admin was created successfully"))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

module.exports = adminSeeder;
