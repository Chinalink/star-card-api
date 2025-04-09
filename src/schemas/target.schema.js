const Joi = require('joi')

const id = Joi.number().integer().required().messages({
  'any.required': '不能缺少目标id',
  'number.base': '目标id必须为数字类型',
  'number.integer': '目标id必须为整数',
})

const name = Joi.string().required().messages({
  'any.required': '不能缺少目标名称',
  'string.empty': '目标名称不能为空',
})

const description = Joi.string().messages({
  'any.base': '目标描述必须为字符串类型',
})

const typeId = Joi.number().integer().required().messages({
  'any.required': '不能缺少目标分类id',
  'number.base': '目标分类id必须为数字类型',
  'number.integer': '目标分类id必须为整数',
})

const cycle = Joi.string().required().messages({
  'any.required': '不能缺少目标周期',
  'string.empty': '目标周期不能为空',
  'string.base': '目标周期必须为字符串类型',
})

const fixed = Joi.number().required().valid(0, 1).messages({
  'any.required': '不能缺少是否启用固定分值',
  'any.only': '是否启用固定分值必须为[0,1]其中一项',
})

const fixedPoint = Joi.number().integer().messages({
  'number.base': '固定分值必须为数字类型',
  'number.integer': '固定分值必须为整数',
})

const babyId = Joi.number().integer().required().messages({
  'number.base': '宝贝id必须为数字类型',
  'number.integer': '宝贝id必须为整数',
})

exports.createTargetSchema = Joi.object({ id, name, description, typeId, cycle, fixed, fixedPoint, babyId })
