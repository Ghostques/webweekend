const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNameInput(data) {
    let errors = {};

    data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
    data.family = !isEmpty(data.family) ? data.family : "";
    data.gender = !isEmpty(data.gender) ? data.gender : "";
    data.national = !isEmpty(data.national) ? data.national : "";

    if (Validator.isEmpty(data.first_name)) {
        errors.first_name = "Необходимо ввести имя";
    }
    if (Validator.isEmpty(data.family)) {
        errors.family = "Необходимо ввести фамилию";
    }
    if (Validator.isEmpty(data.gender)) {
        errors.family = "Укажите пол";
    }
    if (Validator.isEmpty(data.national)) {
        errors.family = "Необходимо ввести дату рождения";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
