const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignSchema =  new Schema({
    name: String,
    dateRange: String,
    traits: [String],
    img: String
})

module.exports = mongoose.model('Sign', SignSchema);