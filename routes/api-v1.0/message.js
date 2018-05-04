var express = require('express');
var router = express.Router();

const {teams} = require('../../config/telegram.json')
const { sendMessage } = require('../../utils/bots/telegram')


router.get('/', async function(req, res){
    let { msg, group } =req.query;
    let chatId = teams[group];

    if ( !chatId ) {
        return res.status(404).json({message: 'invalid parameter name : group'})
    }

    await sendMessage({chatId, msg})
    return res.json({message: msg})
})

module.exports = router;
