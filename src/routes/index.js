const userRouter = require('./user.routes')
const targetRouter = require('./target.routes')

module.exports = app => {
  app.use('/api/user', userRouter)
  app.use('/api/target', targetRouter)
}
