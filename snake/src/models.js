'use strict'

const Joi = require('joi')
const dynogels = require('./dynogels').default

module.exports.Score = dynogels.define(process.env.SCOREBOARD_TABLE, {
  hashKey: 'id',
  timestamps: true,
  rangeKey : 'score',
  schema: {
    id: dynogels.types.uuid(),
    player: Joi.string(),
    score: Joi.number(),
    valid: Joi.boolean().default(true)
  },
  indexes: [{
    hashKey: 'score',
    rangeKey: 'player',
    name: 'ScoreIndex',
    type: 'global'
  }]
})
