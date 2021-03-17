const Bean = require('../models/bean');

module.exports = {
    index
};

function index(req, res) {
   res.render('beans/index',  { title: 'Beanpods', user: req.user});
}


