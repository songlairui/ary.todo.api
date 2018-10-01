const Hapi = require('hapi')
const routerHello = require('./routers/hello')

const server = new Hapi.Server({
  port: 3000,
  host: '127.0.0.1'
})

const init = async () => {
  server.route([...routerHello])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()
