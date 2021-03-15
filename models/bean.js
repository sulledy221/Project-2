const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require("bson");

const BeanSchema = new Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    user: ObjectId
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Bean', BeanSchema);