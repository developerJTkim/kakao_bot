const express = require('express')
const router = express.Router()
const request = require("request")
const serviceUrl = process.env.COVID_API_URL
const serviceKey = decodeURI(process.env.COVID_API_KEY)

const moment = require('moment')
const xmlConvert = require('xml-js')

let query = `?${encodeURIComponent('ServiceKey')}=${serviceKey}&${encodeURIComponent('pageNo')}=${encodeURIComponent('1')}&${encodeURIComponent('numOfRows')}=${encodeURIComponent('10')}`

//week ~ today
router.get('/', (req, res) => {
  query += `&${encodeURIComponent('startCreateDt')}=${encodeURIComponent(moment(new Date()).add(-7,'days').format('YYYYMMDD'))}`
  query += `&${encodeURIComponent('endCreateDt')}=${encodeURIComponent(moment(new Date()).format('YYYYMMDD'))}`
  res.writeHead(200, {"Content-Type":"text/html;charset=utf8"})

  request({
    url : serviceUrl + query,
    method : 'GET'
  }, (error,response,body) => {
    if(error){ console.log({error}) }
    else{
      let resData = JSON.parse(xmlConvert.xml2json(body,{compact:true}))
      res.render('covid/covid',{ title : 'covid-19 week', dataItem : resData.response.body.items.item }, (err, html) =>{
        err ? console.log(err) :
          res.end(html)
      })

    }
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
