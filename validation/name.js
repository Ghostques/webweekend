const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNameInput(data) {
    let errors = {};

    data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
    data.family = !isEmpty(data.family) ? data.family : "";
    data.gender = !isEmpty(data.gender) ? data.gender : "";
    data.national = !isEmpty(data.national) ? data.national : "";

    pattern = '[0-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]';

    if(data.birthday.search(pattern) == -1){
        errors.birthday = "Дата рождения должна быть в формате YYYY-MM-DD"
    }

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
