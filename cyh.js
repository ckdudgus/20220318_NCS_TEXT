var app = require('express')();

var getsend = require('./routes/getsend');
var postsend = require('./routes/postsend');
var sqlsend = require('./routes/sqlsend');

app.use('/getsend' , getsend);
app.use('/postsend' , postsend);
app.use('/sqlsend' , sqlsend);

app.set('port' ,8080)
app.get('/',(req , res) => {
    res.send('첫 페이지 출력');
})

app.listen(app.get('port'), () => {
    console.log('콘솔창에 출력되는지 확인')
})