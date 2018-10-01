const Hapi = require('hapi')
const routerHello = require('./routers/hello')
const pluginSwagger = require('./plugins/swagger')

const server = new Hapi.Server({
  port: 3000,
  host: '127.0.0.1'
})

const init = async () => {
  await server.register([...pluginSwagger])
  server.route([...routerHello])
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', err => {
  console.warn(err)
  process.exit(1)
})

init()
