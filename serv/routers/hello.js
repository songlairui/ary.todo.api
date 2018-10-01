const helloRouter = [
  {
    method: 'GET',
    path: '/hi',
    async handler(request, h) {
      return `hello ${request.query.name || 'world'}`
    }
  }
]

module.exports = helloRouter
