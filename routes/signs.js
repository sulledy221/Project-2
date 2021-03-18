const express = require('express');
const router = express.Router();
const traitsCtrl = require('../controllers/traits.js');
const signsCtrl = require('../controllers/signs.js');


router.get('/', signsCtrl.index);
router.get('/:sign', signsCtrl.show);
router.post('/:sign/trait', traitsCtrl.create)
// router.put('/' signsCtrl)
// router.post('/:id/sign', signsCtrl.create);
// router.get('/:id/signs/new', signsCtrl.new);
// router.update('/', signsCtrl)
// router.delete('/' signsCtrl)

module.exports = router;