const Joi = require('joi')

const name = Joi.string().required().messages({
  'any.required': '不能缺少宝贝昵称',
  'string.empty': '宝贝昵称不能为空',
})

const sex = Joi.number().required().valid(1, 2).messages({
  'any.required': '不能缺少性别',
  'any.only': '性别数据必须为[1,2]其中一项',
})

const point = Joi.number().integer().required().messages({
  'any.required': '不能缺少初始积分',
  'number.base': '初始积分必须为数字类型',
  'number.integer': '初始积分必须为整数',
})

const parentId = Joi.number().integer().required().messages({
  'any.required': '不能缺少亲属id',
  'number.base': '亲属id必须为数字类型',
  'number.integer': '亲属id必须为整数',
})

const babyId = Joi.number().integer().required().messages({
  'number.base': '宝贝id必须为数字类型',
  'number.integer': '宝贝id必须为整数',
})

exports.createBabySchema = Joi.object({ name, sex, point, parentId })
exports.BabyIdSchema = Joi.object({ id: babyId })
