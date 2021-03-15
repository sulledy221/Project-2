const express = require('express');
const router = express.Router();
const beansCtrl = require('../controllers/beans.js');

router.get('/', beansCtrl.index);

module.exports = router;