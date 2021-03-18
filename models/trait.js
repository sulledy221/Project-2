const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require("bson");

const TraitSchema =  new Schema({
    name: String,
    sign: ObjectId
})


module.exports = mongoose.model('Trait', TraitSchema);