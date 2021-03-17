const Sign = require('../models/sign');

module.exports = {
    index,
    show
};

function index(req, res) {
   res.render('beans/index',  { title: 'Beanpods', user: req.user});
}

function show(req, res) {

    Sign.findOne({ name: req.params.sign }, function (err, sign) {
        console.log('show ', sign)
    res.render ('beans/show',  { title: 'Beanpods', user: req.user, sign })
})
}

