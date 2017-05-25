'use strict'

const Joi = require('joi')
const dynogels = require('./dynogels').default

module.exports.Score = dynogels.define(process.env.SCOREBOARD_TABLE, {
  hashKey: 'id',
  timestamps: true,
  rangeKey : 'gameTitle',
  schema: {
    id: dynogels.types.uuid(),
    gameTitle: Joi.string(),
    player: Joi.string(),
    score: Joi.number()
  },
  indexes: [{
    hashKey: 'gameTitle',
    rangeKey: 'score',
    name: 'gameTitle-score-index',
    type: 'global'
  }]
})
