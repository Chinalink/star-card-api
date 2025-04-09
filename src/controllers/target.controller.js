const Target = require('../models/target.model')

// 查询目标分类列表
exports.findAllType = async (req, res, next) => {
  try {
    const result = await Target.getAllType()
    res.send({ code: 200, message: '成功', data: result })
  } catch (error) {
    next(error)
  }
}
// 查询目标列表
exports.findList = async (req, res, next) => {
  try {
    const result = await Target.getList()
    res.send({ code: 200, message: '成功', data: result })
  } catch (error) {
    next(error)
  }
}
// 根据宝贝Id查询目录列表
exports.findListByBabyId = async (req, res, next) => {
  try {
    const result = await Target.getListByBabyId(req.params.id)
    res.send({ code: 200, message: '成功', data: result })
  } catch (error) {
    next(error)
  }
}

// 创建目标
exports.create = async (req, res, next) => {
  try {
    const result = await Target.create(req.body)
    res.send({ code: 200, message: '成功', data: result })
  } catch (error) {
    next(error)
  }
}
