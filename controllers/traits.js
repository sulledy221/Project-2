const Trait = require("../models/trait");

module.exports = {
    create,
    edit,
    show,
    delete: deleteTrait
};

function show(req, res) {
    Trait.findById(req.params.id, function (err, trait) {
        res.render('signs/traits/show', { trait, signName: req.params.sign })
    }
    )
}

function create(req, res) {
    const trait = new Trait(req.body);
    trait.save(function (err) {
        if (err) return res.render('signs/show');
        res.redirect(`/signs/${req.params.sign}`);
    });
}

function edit(req, res) {

    Trait.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err, trait) => {
            res.redirect(`/signs/${req.params.sign}`);
        }
    )
}

function deleteTrait(req, res) {
    console.log('deleteTrait')
    Trait.findByIdAndRemove(
        req.params.id,
        (err, trait) => {
            res.redirect(`/signs/${req.params.sign}`);
        }
    )
}
