var express = require('express');
var router = express.Router();

router.post('/',(req , res) => {
    res.send('postsend라는 요청의 응답')
})



module.exports = router;