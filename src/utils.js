const config = require('./config')
const jwt = require('jsonwebtoken')

exports.createToken = option => {
  return jwt.sign(option, config.jwtSecretLey, {
    expriresIn: '24h', //过期时间
  })
}

exports.verifyToken = () => {}

module.exports = {
  createToken,
}
