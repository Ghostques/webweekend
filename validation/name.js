const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNameInput(data) {
    let errors = {};

    data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
    data.family = !isEmpty(data.family) ? data.family : "";
    data.gender = !isEmpty(data.gender) ? data.gender : "";
    data.national = !isEmpty(data.national) ? data.national : "";

    pattern = '[0-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]';
    gen_pattern = '[a-zA-Z]';

    if(data.birthday.search(pattern) == -1){
        errors.birthday = "Дата рождения должна быть в формате YYYY-MM-DD"
    }
    if(data.gender.search(gen_pattern) != -1){
        errors.gender = "Пол должен быть числом 0 или 1";
    } else if (data.gender > 1 || data.gender < 0){
        errors.gender = "Пол должен быть числом 0 или 1";
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
        errors.family = "Необходимо ввести национальность";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
