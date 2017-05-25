'use strict'

const scoreModel = require('./models').Score
const indexTemplate = require('./index-template.js').default

module.exports.index = function (event, context, callback) {
  const response = {
    headers: {
      'Content-Type': 'text/html',
    },
    statusCode: 200,
    body: indexTemplate
  }

  callback(null, response)
}

module.exports.getRank = function (event, context, callback) {
  const { score = null } = event.pathParameters
  const response = {
    headers: { 'Content-Type': 'application/json' },
    statusCode: 400
  }

  if (!score) {
    callback(null, response)
  }

  const scan = scoreModel.scan().where('score').gt(parseInt(score)).select('COUNT')
  scan.exec((err, data) => {
    if (!err) {
      response.statusCode = 200
      response.body = JSON.stringify({ rank: data.Count + 1 })
    }
    else {
      console.log(err)
    }

    callback(null, response)
  })
}

module.exports.getScoreboard = function (event, context, callback) {
  const response = {
    headers: { 'Content-Type': 'application/json' },
    statusCode: 400
  }
  const query = scoreModel
    .query('Snake')
    .usingIndex('gameTitle-score-index')
    .descending()
    .limit(20)

  query.exec((err, data) => {
    if (!err) {
      response.statusCode = 200
      response.body = data.Items.map(item => item.attrs)
    }

    callback(null, response)
  })
}

module.exports.postScore = function (event, context, callback) {
  const gameTitle = 'Snake'
  const { player, score } = JSON.parse(event.body)

  scoreModel.create({ gameTitle, player, score }, (err, data) => {
    if (err) {
      const response = { statusCode: 400 }
      callback(null, response)
    }
    else {
      const response = { statusCode: 200 }
      callback(null, response)
    }
  })
}
