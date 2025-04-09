// 全局错误处理
// const logger = require('../logger')

module.exports = (err, req, res, next) => {
  console.log('err2', err)
  // 处理Joi验证错误
  if (err.error && err.error.name && err.error.name === 'ValidationError') {
    const details = err.error.details.map(d => ({
      field: d.path.join('.'),
      message: d.message.replace(/"/g, ''),
    }))
    // logger.error(`${req.method} ${req.originalUrl} Joi数据验证有误：` + JSON.stringify(details))
    return res.status(err.status || 400).json({
      code: -1,
      message: details && details.length > 0 ? details[0].message : '参数校验失败！',
      data: details,
    })
  }

  // 其他错误
  const errorMsg = err instanceof Error ? err.message : err
  // logger.error(`${req.method} ${req.originalUrl} ` + errorMsg)
  res.status(err.status || 500).json({
    code: -1,
    message: errorMsg,
    data: null,
  })
}
