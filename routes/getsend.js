var express = require('express');
var router = express.Router();

router.get('/',(req , res) => {
    res.send('getsend라는 요청의 응답')
})


module.exports = router;