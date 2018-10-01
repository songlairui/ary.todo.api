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
  }
]

module.exports = helloRouter
