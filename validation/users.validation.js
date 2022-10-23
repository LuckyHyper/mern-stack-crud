const isEmpty = require('./isEmpty');
const validator = require('validator');


module.exports = function ValidateUser(data) {
    let errors = {}
    data.Email = !isEmpty(data.Email) ? data.Email : ""
    data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : ""
    data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : ""
    data.Phone = !isEmpty(data.Phone) ? data.Phone : ""

    if (!validator.isEmail(data.Email)) {
        errors.Email = "Format Email Required"
    }
    if (validator.isEmpty(data.Firstname)) {
        errors.Firstname = "Required Firstname"
    }
    if (validator.isEmpty(data.Lastname)) {
        errors.Lastname = "Required Lastname"
    }
    if (validator.isEmpty(data.Phone)) {
        errors.Phone = "Required Phone"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}