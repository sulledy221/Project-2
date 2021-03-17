const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
    name: String,
    googleId: String,
    email: String
})



module.exports = mongoose.model('User', UserSchema);
// Create your User Model