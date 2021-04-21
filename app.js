const express = require('express')
const app = express()
const port = 3000

// Router
const msgRouter = require('./routes/msg')
const coinRouter = require('./routes/coin')
const weatherRouter = require('./routes/weather')
const covidRouter = require('./routes/covid19')

app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.writeHead(200, {"Content-Type":"text/html;charset=utf8"})
  res.render('main',{}, (err, html) =>{
    err ? console.log(err) : res.end(html)
  })
})

app.use('/msg',msgRouter)
app.use('/coin',coinRouter)
app.use('/weather',weatherRouter)
app.use('/covid',covidRouter)
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.listen(port, () => console.log('node on 3000'))
