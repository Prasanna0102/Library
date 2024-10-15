
import express from'express'
const app = express()
import expressLayouts from'express-ejs-layouts'
import { configDotenv } from 'dotenv'
configDotenv()
import indexRouter from'./routes/index.js'

app.set('view engine', 'ejs')
app.set('views', '__dirname' + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGODB_URI)
const db = await mongoose.connection
db.on('error',() => console.error(error))
db.on('open',() => console.log('Connnected to mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)