const express = require('express');
const router = express.Router();
const main = require('./main/index')
const admin = require('./admin/index');

router.use('/', main);
router.use('/admin', admin);




module.exports = router;