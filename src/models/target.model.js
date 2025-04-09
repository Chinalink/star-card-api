const pool = require('./db')

const Target = function (user) {}

// 查询
Target.getAllType = async () => {
  let sql = 'SELECT id,name FROM target_type WHERE isDefault=1'
  try {
    const [rows] = await pool.query(sql)
    return Promise.resolve(rows)
  } catch (error) {
    return Promise.reject('数据库内部错误')
  }
}

// 查询目标列表
Target.getList = async () => {
  let sql =
    'SELECT t.id, t.name, t.description, t.typeId, c.name AS typeName, t.cycle, t.fixed, t.fixedPoint  FROM target_default t JOIN target_type c ON t.typeId = c.id'
  try {
    const [rows] = await pool.query(sql)
    return Promise.resolve(rows)
  } catch (error) {
    return Promise.reject('数据库内部错误')
  }
}

// 根据宝贝ID查询目标列表
Target.getListByBabyId = async babyId => {
  let sql =
    'SELECT t.id, t.name, t.description, t.typeId, c.name AS typeName, t.cycle, t.fixed, t.fixedPoint  FROM target_user t JOIN target_type c ON t.typeId = c.id WHERE t.babyId=?'
  try {
    const [rows] = await pool.query(sql, [babyId])
    return Promise.resolve(rows)
  } catch (error) {
    return Promise.reject('数据库内部错误')
  }
}

// 创建目标
Target.create = async data => {
  // const { id, name, typeId, cycle, fixed, babyId } = data
  // const description = data.description || ''
  // const fixedPoint = data.fixedPoint || 0
  const { id, name, description, typeId, cycle, fixed, fixedPoint, babyId } = data
  let targetData = {
    id,
    name,
    description: description ? description : '',
    typeId,
    cycle,
    fixed,
    fixedPoint: fixed == 1 ? fixedPoint : 0,
    babyId,
  }
  let sql = 'INSERT INTO target_user set ?'
  try {
    const [results] = await pool.query(sql, [targetData])
    if (results.affectedRows === 1) return Promise.resolve(null)
  } catch (error) {
    console.log(error)
    return Promise.reject('数据库内部错误')
  }
}

module.exports = Target
