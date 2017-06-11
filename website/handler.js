'use strict'

import awsServerlessExpress from 'aws-serverless-express'
import app from './app/server'

const server = awsServerlessExpress.createServer(app)

export const hello = (event, context) => awsServerlessExpress.proxy(server, event, context)
