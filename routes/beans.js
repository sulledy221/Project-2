const express = require('express');
const router = express.Router();
const beansCtrl = require('../controllers/beans.js');

router.get('/', beansCtrl.index);
// router.put('/' beansCtrl)
// router.post('/', beansCtrl)
// router.update('/', beansCtrl)
// router.delete('/' beansCtrl)

module.exports = router;