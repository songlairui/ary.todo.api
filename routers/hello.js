const models = require('../models')

const helloRouter = [
  {
    method: 'GET',
    path: '/hi',
    async handler(request, h) {
      return `hello ${request.query.name || 'world'}`
    },
    config: {
      tags: ['api', 'hi'],
      description: '打招呼'
    }
  },
  {
    method: 'GET',
    path: '/info',
    async handler(request, h) {
      let result = '数据库信息：'
      const raw = await models.allTodo.findAll()
      return `\
has ${raw.length} todo(s)
${raw.filter(todo => todo.status === 0).length} finished
`
    }
  }
]

module.exports = helloRouter
