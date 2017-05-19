'use strict'

const dynogels = require('dynogels')
const accessKeyId = require('../config').ACCESS_KEY_ID
const secretAccessKey = require('../config').SECRET_ACCESS_KEY
const region = require('../config').REGION

dynogels.AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region
})

module.exports.default = dynogels
