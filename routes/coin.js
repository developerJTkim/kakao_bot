const express = require('express')
const url = require('url');
const router = express.Router()

global.fetch = require('node-fetch')
const cc = require('cryptocompare')
cc.setApiKey('943cc2a6e41fc81eb72a3301aca3a387638782626255f068e540846c9eaebb24')

var options = {
  host: 'min-api.cryptocompare.com',
  path: '/data/price?'
};

router.get('/', (req, res) => {
  res.send('coin index page')
})

router.get('/price/:coin', (req, res) => {
  // https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,KR
  try {
    let query = (new URLSearchParams({
      fsym: req.query.fsym,
      tsyms: req.query.tsyms
    })).toString()    
    options.path += query
    // res.json(options)
    //const urlObject = url.parse("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,KR")
    //console.log(urlObject)
/*
    cc.coinList().then(res2=>{
      res.json(res2)
      console.log(res2)
    })
*/
    
    cc.price(req.params.coin,['KR','USD']).then(res2=>{
      res.json(res2)
    })
  } catch (error) {
    res.json(error)
    // data = error
  }

  // res.json(data)
})

router.get('/price/btc', (req, res) => {
  router.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD%2CKR", (req2, res2) => {
    res2.json(res2)
  })
})
module.exports = router;
