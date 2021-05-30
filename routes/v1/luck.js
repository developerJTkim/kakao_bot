const express = require('express')
const router = express.Router()
const commonFunctions = require('../../lib/common.js')

router.get('/', (req, res) => {
  res.send('luck index page')
})

router.post('/', (req, res) => {
  const question = req.body.userRequest.utterance
  let answer = ""
  let randN = commonFunctions.randomNum(1,5)

  if(randN === 1) answer = "코인 떡상 할지도?"
  else if(randN === 2)  answer = "로또 될지도?"
  else if(randN === 3)  answer = "연봉 오를지도?"
  else if(randN === 4)  answer = "똥 밟을지도?"
  else if(randN === 5)  answer = "새똥 맞을지도?"
  else answer = "코인 떡락할지도?"
  
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: answer  ? answer : "정해진 키워드가 아닙니다."
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});


module.exports = router;
