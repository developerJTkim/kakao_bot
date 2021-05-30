const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('msg index page')
})

router.get('/:msg', (req, res) => {
  res.send(`req params : ${req.params.msg}`)
})

router.post('/', (req, res) => {
//console.log({req})
//console.log({res})
	const question = req.body.userRequest.utterance
  let answer = ""
  let randN = randomNum(1,5)
  let randN2 = randomNum(1,20)
  switch(question){

  }
console.log(answer)
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

function randomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)) + min
}

function lotto(){
  const number = []
  while (number.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(number.indexOf(ran) === -1) {
      number.push(ran)
    }
  }
  return number.join(',')
}

module.exports = router;
