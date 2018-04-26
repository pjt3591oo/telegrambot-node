var express = require('express');
var router = express.Router();

var { sendMessage } = require('../../bots/telegram')

router.get('/', function(req, res){
    let { msg } =req.query
    sendMessage(msg)
    res.json({message: msg})
})

module.exports = router;
