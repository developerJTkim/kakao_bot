const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('coin index page')
})

router.get('/price', (req, res) => {
  // https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,KR
  try {
    let query = (new URLSearchParams({
      fsym: req.query.fsym,
      tsyms: req.query.tsyms
    })).toString()
    let apiUrl = `https://min-api.cryptocompare.com/data/price?${query}`
//    res.json(apiUrl)
    router.get(apiUrl, (req2, res2) => {
      res2.json(res2)
      // data = res
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
