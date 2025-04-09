const express = require('express')
const validator = require('express-joi-validation').createValidator({ passError: true })

const users = require('../controllers/user.controller')
const userSchemas = require('../schemas/user.schema')
// 创建路由对象
const router = express.Router()

// 查询用户分类
router.get('/type', users.findAllType)
// 创建宝贝
router.post('/createBaby', validator.body(userSchemas.createBabySchema), users.createBaby)
// 删除宝贝
router.delete('/baby', validator.params(userSchemas.BabyIdSchema), users.deleteBaby)

module.exports = router
