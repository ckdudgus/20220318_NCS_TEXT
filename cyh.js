var express = require('express')
var app = express();

app.get('/',(req , res) => {
    res.send('첫 페이지 출력');
})

app.listen(8080, () => {
    console.log('콘솔창에 출력되는지 확인')
})