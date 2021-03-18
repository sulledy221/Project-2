const Sign = require("../models/sign");

module.exports = {
    new: newSigns,
    create
};

// const newSignObj = new Sign(req, res);
// newSignObj.save(err => {
//     if(err) return resizeBy.status(500).send(err);
//     return resizeBy.status(200). send(newSignObj)
// }) 
function newSigns(req, res) {
    res.render('/signs/new', {id: req.params.id });
}

function create(req, res) {
    console.log('the body', req.body)
    req.body.traits = req.params.id
    const sign = new Sign(req.body);
    sign.save(function (err) {
        if (err) return res.render('/signs/new');
        console.log(signs);
        res.redirect(`/beans/${req.params.id}`);
    });
}

