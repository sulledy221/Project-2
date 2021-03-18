const Trait = require("../models/trait");

module.exports = {
    new: newTraits,
    create
};

function newTraits(req, res) {
    res.render('/traits/new', {id: req.params.id });
}

function create(req, res) {
    // req.body.sign = req.params.id
    const trait = new Trait(req.body);
    trait.save(function (err) {
        if (err) return res.render('signs/show');
        res.redirect(`/signs/${req.params.sign}`);
    });
}