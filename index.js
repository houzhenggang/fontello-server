var service = require('server-base')
var routes = require('./routes')
var leveldb = require('leveldb-mount')

leveldb.server(
  service('ri-hooks', routes)
  .config.assert(['PORT', 'DB_PATH'])
  .start()
)
