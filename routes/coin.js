const express = require('express')
const router = express.Router()
const request = require("request")

router.get('/', (req, res) => {
  res.send('coin index page')
})

router.get('/cc/price/:coin', (req, res) => {
  // https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,KR
  try {
    global.fetch = require('node-fetch')
    const cc = require('cryptocompare')
    cc.setApiKey('943cc2a6e41fc81eb72a3301aca3a387638782626255f068e540846c9eaebb24')

    cc.price(req.params.coin,['KR','USD']).then(res2=>{
      res.json(res2)
    })
  } catch (error) {
    res.json(error)
    // data = error
  }
})

router.get('/list', (req,res) =>{
  const options = { method : 'GET' , url : 'https://api.upbit.com/v1/market/all' }

  request(options, function (error, response, body) {
    res.send(JSON.stringify(body,null, 4))
    // console.log(body)
  })
})

router.get('/price/:coin', (req,res) =>{
  const options = { method : 'GET' , url : `https://api.upbit.com/v1/trades/ticks?market=KRW-${req.params.coin}&count=1` }

  request(options, function (error, response, body) {
    res.send(JSON.stringify(body))
    // console.log(body)
  })
})

module.exports = router;
