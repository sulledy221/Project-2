const express = require('express');
const router = express.Router();
const beansCtrl = require('../controllers/beans.js');
const signsCtrl = require('../controllers/signs.js');

router.get('/', beansCtrl.index);
router.get('/:sign', beansCtrl.show)
// router.put('/' beansCtrl)
router.post('/:id/sign/new', signsCtrl.create)
// router.update('/', beansCtrl)
// router.delete('/' beansCtrl)

module.exports = router;