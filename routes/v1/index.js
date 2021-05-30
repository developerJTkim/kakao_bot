const express = require('express')
const router = express.Router()
const commonFunctions = require('../../lib/common.js')

router.get('/', (req, res) => {
  res.send('lotto index page')
})

router.post('/', (req, res) => {
  const question = req.body.userRequest.utterance
  let answer = commonFunctions.lotto()
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
