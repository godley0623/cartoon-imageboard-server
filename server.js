import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './src/db/connection.js'
import { router as threadRouter } from './src/routes/threads.js'
import { router as postNumberRouter } from './src/routes/postNumber.js'
import {router as translateRouter} from './src/routes/openai.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 7000

app.use('/threads', threadRouter)
app.use('/postnumber', postNumberRouter)
app.use('/translate', translateRouter)

/*----- Connect to Database -----*/
db.on('connected', async () => {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
 })

app.listen(port)