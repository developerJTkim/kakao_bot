const express = require('express')
const router = express.Router()
const request = require("request")
const serviceUrl = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson"
const serviceKey = decodeURI("QPxX2Vxt908Py5YwVLkoZyh%2BJApMY2qHKIHtr3lFoJE9rzGhBbNgFEbH97l7ubCcWG2wD3LqcksTZ03Fzzt4EA%3D%3D")

const moment = require('moment')
let query = `?${encodeURIComponent('ServiceKey')}=${serviceKey}&${encodeURIComponent('pageNo')}=${encodeURIComponent('1')}&${encodeURIComponent('numOfRows')}=${encodeURIComponent('10')}`

//today
router.get('/', (req, res) => {
  query += `&${encodeURIComponent('startCreateDt')}=${encodeURIComponent(moment(new Date()).format('YYYYMMDD'))}`
  query += `&${encodeURIComponent('endCreateDt')}=${encodeURIComponent(moment(new Date()).format('YYYYMMDD'))}`
  request({
    url : serviceUrl + query,
    method : 'GET'
  }, function (error,response,body){
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
  }, (error,response,body) => {
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
  }, (error,response,body) => {
    (error) ? console.log({error}) : res.json(body)
  })
})

module.exports = router;
