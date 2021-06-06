const express = require('express');
const router = express.Router();
const main = require('./main')
const admin = require('./admin');

router.use('/admin', admin);
router.use('/', main);




module.exports = router;