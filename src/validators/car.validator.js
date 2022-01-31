import Joi from "joi";

export const CarValidator=Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яіІїЇґ]{1,20}$')).required().messages({
        'string.empty':'"model" is not allowed to be empty',
        'string.pattern.base':'Only letters min 1 max 20'
    }),
    price: Joi.number().min(0).max(1000000).messages({
        'number.base':'Price can be from 1 to 1 000 000',
        'number.min':'Price should be more or equal 0',
        'number.max':'Price should be not more than 1 000 000',
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Year can be from 1900 till today year'
    })
})