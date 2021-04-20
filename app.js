const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/msg', (req, res) => {
  const data = {'method' : 'get' ,'type': 'text' , 'data' : req.query.data}
  res.json(data)
});

app.get('/coin/price',(req, res) => {
  // https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR,KR
  try{
    let query = (new URLSearchParams({
      fsym : req.query.fsym,
      tsyms : req.query.tsyms
    })).toString();
    let apiUrl = `https://min-api.cryptocompare.com/data/price?${query}`;
//    res.json(apiUrl);
    app.get(apiUrl, (req2 ,res2) => {
      res2.json(res2)
      // data = res;
    }) 
  }catch(error){
    res.json(error);
    // data = error;
  }

  // res.json(data);
});

app.get('/coin/price/btc',(req, res) => {
  app.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD%2CKR", (req2 , res2) => {
    res2.json(res2);
  })
});

app.post('/message', (req, res) => {
  const question = req.body.userRequest.utterance;
  const goMain = '처음으로';
  
  if (question === '테스트') {
    const data = {
      'version': '2.0',
      'template': {
	    'outputs': [{
	      'simpleText': {
	        'text': '테스트'
	      }
	    }],
	    'quickReplies': [{
	      'label': goMain,
	      'action': 'message',
	      'messageText': goMain
	    }]
      }
    }
  }
  res.json(data);
});

app.listen(3000, () => console.log('node on 3000'));
