import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import personRouter from './controllers/persons.js'
import middlewear from './utils/middlewear.js'

import config from './utils/config.js'
const app = express()

mongoose
    .connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log('connected to MongoDB'))
    .catch((err) => console.log('error connecting to MongoDB', err.message))
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(middlewear.requestLogger)

app.use('/api/persons', personRouter)

app.use(middlewear.errorHandler)
app.use(middlewear.unknownEndpoint)

export default app
