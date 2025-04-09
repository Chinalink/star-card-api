// 导入express
const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
// const cors = require('cors')
// 创建express实例
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cors())

require('./routes')(app)

// 全局错误处理
app.use(errorHandler)

// 调用app.listen方法，指定端口号并启动web服务器
app.listen(3000, function () {
  console.log('server running at http://127.0.0.1:3000')
})
