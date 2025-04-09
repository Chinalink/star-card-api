const pool = require('./db')

const User = function (user) {}

// 查询用户分类
User.getAllType = async () => {
  let sql = 'SELECT id,name FROM user_type'
  try {
    const [rows] = await pool.query(sql)
    return Promise.resolve(rows)
  } catch (error) {
    return Promise.reject('数据库内部错误')
  }
}

// 创建宝贝
User.createBaby = async babyData => {
  let sql = 'INSERT INTO user_baby (name, sex, point, parentId) VALUES (?,?,?,?)'
  try {
    const [results] = await pool.query(sql, [babyData.name, babyData.sex, babyData.point, babyData.parentId])
    if (results.affectedRows === 1) return Promise.resolve(null)
  } catch (error) {
    console.log(error)
    return Promise.reject('数据库内部错误')
  }
}

User.deleteBaby = async id => {
  try {
    
  } catch (error) {
    
  } finally () {
    
  }
}

module.exports = User
