const Joi = require('joi');

class LoginSchema {

    static ValidateUserCredential(value) {
        const registrationValidateSchema = Joi.object().keys({
            first_name:Joi.string().required().not(null).required(),
            last_name:Joi.string().required().not(null).required(),
            username:Joi.string().required().not(null).required(),
            email:Joi.string().email().required().not(null).required(),
            phone_number : Joi.number().required().not(null).required(),
            password: Joi.string().required().not(null).required(),
            confirm_password : Joi.string().required().not(null).required()

        })
        return registrationValidateSchema.validate(value);
    }

    static ValidateUserLogin(value) {
        const ValidateSchema = Joi.object({
            email:Joi.string().email().required().not(null).required(),
            password: Joi.string().required().not(null).required(),

        })
        return ValidateSchema.validate(value);
        
    }

    static ValidateChangePassword(value){
        const ValidateSchema = Joi.object({
           Hmi:Joi.string().required().not(null), 
           userId:Joi.string().required().not(null), 
        //    oldPassword:Joi.string().required().not(null),
           newPassword:Joi.string().required().not(null),

        })

        return ValidateSchema.validate(value)
    }

}
module.exports = LoginSchema;