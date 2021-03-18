const express = require('express');
const router = express.Router();
const traitsCtrl = require('../controllers/traits.js');
const signsCtrl = require('../controllers/signs.js');


router.get('/', signsCtrl.index);
router.get('/:sign', signsCtrl.show);
router.post('/:sign/trait', traitsCtrl.create);
router.get('/:sign/traits/edit/:id', traitsCtrl.show)
router.post('/:sign/traits/edit/:id', traitsCtrl.edit)
router.post('/:sign/traits/delete/:id', traitsCtrl.delete)

// router.delete('/' signsCtrl)
// router.delete('/' signsCtrl)

module.exports = router;