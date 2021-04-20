const express = require('express')
const app = express()
const msgRouter = require('./routes/msg')
const coinRouter = require('./routes/coin')
const weatherRouter = require('./routes/weather')

app.use('/msg',msgRouter)
app.use('/coin',coinRouter)
app.use('/weather',weatherRouter)
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(3000, () => console.log('node on 3000'))
