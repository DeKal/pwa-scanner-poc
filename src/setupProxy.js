/* eslint-disable @typescript-eslint/no-var-requires */

// NOTE: Setup Proxy only works in Javascript
require('dotenv').config()
const init = require('../server/init')
module.exports = init
