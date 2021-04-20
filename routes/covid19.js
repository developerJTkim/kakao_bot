const express = require('express')
const router = express.Router()
const request = require("request")
const serviceUrl = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson"
const serviceKey = "qVLlVvSVCyWu9cUjja9wkUwtsYBlrRMQzh4rOGEkEK3Jp4SNtkuV4UOYmW3C47Qv3zFmk9FSgdLZeaFXqsJ0Jw%3D%3D"
let query = `?${encodeURIComponent('ServiceKey')}=${serviceKey}&${encodeURIComponent('pageNo')}=${encodeURIComponent('1')}&${encodeURIComponent('numOfRows')}=${encodeURIComponent('10')}`

//today
router.get('/', (req, res) => {
  query += `&${encodeURIComponent('startCreateDt')}=${encodeURIComponent('20210420')}`
  query += `&${encodeURIComponent('endCreateDt')}=${encodeURIComponent('20210420')}`

  request({
    url : serviceUrl + query,
    method : 'GET'
  }, (error,res,body) => {
    (error) ? console.log({error}) : res.json(body)
  })
})

//one day
router.get('/:date', (req,res) =>{
  query += `&${encodeURIComponent('startCreateDt')}=${encodeURIComponent(date)}`
  query += `&${encodeURIComponent('endCreateDt')}=${encodeURIComponent(date)}`

  request({
    url : serviceUrl + query,
    method : 'GET'
  }, (error,res,body) => {
    (error) ? console.log({error}) : res.json(body)
  })
})

//between date
router.get('/between/', (req,res) =>{
  query += `&${encodeURIComponent('startCreateDt')}=${encodeURIComponent(req.params.startDate)}`
  query += `&${encodeURIComponent('endCreateDt')}=${encodeURIComponent(req.params.endDate)}`

  request({
    url : serviceUrl + query,
    method : 'GET'
  }, (error,res,body) => {
    (error) ? console.log({error}) : res.json(body)
  })
})

module.exports = router;
