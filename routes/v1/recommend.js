const express = require('express')
const router = express.Router()
const commonFunctions = require('../../lib/common.js')

router.get('/', (req, res) => {
  res.send('recommend index page')
})

router.get('/:msg', (req, res) => {
  res.send(`req params : ${req.params.msg}`)
})

router.post('/', (req, res) => {
  const question = req.body.userRequest.utterance
  let answer = ""
  let randN2 = commonFunctions.randomNum(1,20)
  
  if(randN2 === 1) answer = "라면 & 김밥"
  else if(randN2 === 2)  answer = "김치찌개"
  else if(randN2 === 3)  answer = "돈까스"
  else if(randN2 === 4)  answer = "햄버거"
  else if(randN2 === 5)  answer = "순대국밥"
  else if(randN2 === 6)  answer = "구내식당"
  else if(randN2 === 7)  answer = "부대찌개"
  else if(randN2 === 8)  answer = "우동"
  else if(randN2 === 9)  answer = "제육볶음"
  else if(randN2 === 10)  answer = "갈비탕"
  else if(randN2 === 11)  answer = "알탕"
  else if(randN2 === 12)  answer = "칼국수"
  else if(randN2 === 13)  answer = "순두부찌개"
  else if(randN2 === 14)  answer = "된장찌개"
  else if(randN2 === 15)  answer = "설렁탕"
  else if(randN2 === 16)  answer = "뼈해장국"
  else if(randN2 === 17)  answer = "샌드위치"
  else if(randN2 === 18)  answer = "볶음밥"
  else if(randN2 === 19)  answer = "짜장면"
  else if(randN2 === 20)  answer = "짬뽕"
  else answer = "기사식당 정식"

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: answer  ? answer : "정해진 키워드가 아닙니다."
            // text : 'hello!'
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

module.exports = router;
