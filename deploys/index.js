const fs = require('fs')
const path = require('path')

fs.readdirSync(path.resolve('.', 'deploys'))
  .filter(file => file != 'index.js')
  .map(file => path.resolve('.', 'deploys', file))
  .forEach(file => require(file).deploy())