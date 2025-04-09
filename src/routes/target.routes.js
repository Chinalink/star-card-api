const express = require('express')
const validator = require('express-joi-validation').createValidator({ passError: true })

const targets = require('../controllers/target.controller')
const userSchemas = require('../schemas/user.schema')
const targetSchemas = require('../schemas/target.schema')

// 创建路由对象
const router = express.Router()

// 查询目标分类列表
router.get('/type', targets.findAllType)

// 查询目标列表
router.get('/list', targets.findList)

// 根据宝贝Id查询目录列表
router.get('/list/:id', validator.params(userSchemas.BabyIdSchema), targets.findListByBabyId)

router.post('/create', validator.body(targetSchemas.createTargetSchema), targets.create)

module.exports = router
