const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('msg index page')
})

router.get('/:msg', (req, res) => {
  res.send(`req params : ${req.params.msg}`)
})

router.post('/', (req, res) => {
  const question = req.body.userRequest.utterance
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: question ? question : "정해진 키워드가 아닙니다."
            // text : 'hello!'
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});
module.exports = router;
