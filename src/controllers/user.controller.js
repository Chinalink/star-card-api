const User = require('../models/user.model')

// 查询用户分类
exports.findAllType = async (req, res, next) => {
  try {
    const result = await User.getAllType()
    res.send({ code: 200, message: '成功', data: result })
  } catch (error) {
    next(error)
  }
}
// 创建宝贝
exports.createBaby = async (req, res, next) => {
  try {
    const result = await User.createBaby(req.body)
    res.send({ code: 200, message: '添加成功', data: result })
  } catch (error) {
    next(error)
  }
}

// 删除宝贝
exports.deleteBaby = async (req, res, next) => {
  try {
    const result = await User.deleteBaby(req.params.id)
    res.send({ code: 200, message: '删除成功', data: result })
  } catch (error) {
    next(error)
  }
}
