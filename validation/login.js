const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Необходимо ввести имя";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Необходимо ввести пароль";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
