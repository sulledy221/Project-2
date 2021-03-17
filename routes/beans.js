const express = require('express');
const router = express.Router();
const beansCtrl = require('../controllers/beans.js');

router.get('/', beansCtrl.index);
router.get('/:sign', beansCtrl.show)
// router.put('/' beansCtrl)
// router.post('/', beansCtrl)
// router.update('/', beansCtrl)
// router.delete('/' beansCtrl)

module.exports = router;