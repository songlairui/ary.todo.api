const inert = require('inert')
const package = require('package')
const vision = require('vision')
const hapiSwagger = require('hapi-swagger')

module.exports = [
  inert,
  vision,
  {
    plugin: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: package.version
      },
      grouping: 'hi',
      tags: [
        {
          name: 'hi',
          description: '演示'
        }
      ]
    }
  }
]
