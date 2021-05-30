const express = require('express')
const app = express()
require('dotenv').config()
const logger = require('morgan')
const bodyParser = require('body-parser')

const port = 3000
const msgRouter = require('./routes/msg')
const coinRouter = require('./routes/coin')
const weatherRouter = require('./routes/weather')
const covidRouter = require('./routes/covid19')
const recommendRouter = require('./routes/v1/recommend')
const lottoRouter = require('./routes/v1/lotto')
const luckRouter = require('./routes/v1/luck')

// App set
app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')

// App Use
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(logger('dev',{}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// Router Set
app.get('/', (req, res) => {
  res.writeHead(200, {"Content-Type":"text/html;charset=utf8"})
  res.render('main/main',{}, (err, html) =>{
    err ? console.log(err) : res.end(html)
  })
})

//app.use('/api/msg',msgRouter)
app.use('/api/coin',coinRouter)
app.use('/api/weather',weatherRouter)
app.use('/api/covid',covidRouter)
app.use('/api/v1/lotto',lottoRouter)
app.use('/api/v1/recommend',recommendRouter)
app.use('/api/v1/luck',luckRouter)

app.listen(port, () => console.log('node on 3000'))
