module.exports.randomNum = function (min, max){
  return Math.floor(Math.random()*(max-min+1)) + min
}

module.exports.lotto = function(){
  const number = []
  while (number.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    if(number.indexOf(ran) === -1) {
      number.push(ran)
    }
  }
  console.log({number})
  return number.join(',')
}
