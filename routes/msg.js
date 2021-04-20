const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('msg index page')
})

router.get('/:msg', (req, res) => {
  res.send(`req params : ${req.params.msg}`)
})

router.post('/', (req, res) => {
  // const question = req.body.userRequest.utterance
  // const goMain = '처음으로'
  //
  // if (question === '테스트') {
  //   const data = {
  //     'version': '2.0',
  //     'template': {
  //       'outputs': [{
  //         'simpleText': {
  //           'text': '테스트'
  //         }
  //       }],
  //       'quickReplies': [{
  //         'label': goMain,
  //         'action': 'message',
  //         'messageText': goMain
  //       }]
  //     }
  //   }
  // }
  // res.json(data)
})

module.exports = router;
