var express = require('express');
var router = express.Router();

const message = require('./message');
const ten = require('./ten');

router.use('/message', message)
router.use('/ten', ten)

module.exports = router;
