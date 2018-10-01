const path = require('path')

const development = {
  username: 'root',
  password: null,
  database: 'database_development',
  // host: '127.0.0.1',
  dialect: 'sqlite',
  storage: path.resolve(__dirname, '../database.sqlite'),
  // 请参考 Querying - 查询 操作符 章节
  operatorsAliases: false
}

const config = {
  development,
  test: {
    ...development,
    database: 'database_test'
  },
  production: {
    ...development,
    database: 'database_production'
  }
}

module.exports = config
