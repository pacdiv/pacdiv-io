'use strict'

import express from 'express'
import { join } from 'path'

const app = express()

app.set('view engine', 'ejs')
app.set('views', join(process.env.APP_PATH || __dirname, '/views'))

app.get('*', (req, res) => {
  res.render('app')
})

export default app
