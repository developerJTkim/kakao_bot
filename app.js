const express = require('express')
const app = express()
require('dotenv').config()

const port = 3000
const msgRouter = require('./routes/msg')
const coinRouter = require('./routes/coin')
const weatherRouter = require('./routes/weather')
const covidRouter = require('./routes/covid19')

// App set
app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')

// App Use
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Router Set
app.get('/', (req, res) => {
  res.writeHead(200, {"Content-Type":"text/html;charset=utf8"})
  res.render('main',{}, (err, html) =>{
    err ? console.log(err) : res.end(html)
  })
})

app.use('/api/msg',msgRouter)
app.use('/api/coin',coinRouter)
app.use('/api/weather',weatherRouter)
app.use('/api/covid',covidRouter)

app.listen(port, () => console.log('node on 3000'))
